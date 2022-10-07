from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from django.forms import modelformset_factory
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout

import xlrd

from .models import *
from .serializers import *
from .forms import *

# URL list


def index(request):
    return render(request, 'api.html')

# Articles


class ArticleDisplayView(generics.ListAPIView):
    serializer_class = ArticleDisplaySerializer

    def get_queryset(self):
        limit = self.kwargs['limit']
        return Article.objects.all().order_by('-id')[:int(limit)]


class ArticleView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleCategoraizedView(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return Article.objects.filter(category=category)


class ImagesView(generics.ListAPIView):
    # Images
    serializer_class = ArticleImageSerializer

    def get_queryset(self):
        articleID = self.kwargs['articleID']
        return ArticleImage.objects.filter(article=articleID)

# Login & Logout


def loginView(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect('article-form/')
        else:
            return HttpResponseRedirect('/')

    return render(request, 'loginFrom.html')


def logoutView(request):
    logout(request)
    return HttpResponseRedirect('/api')

# Article creation form


@csrf_exempt
def articleCreateView(request):
    if not request.user.is_anonymous:
        if request.method == 'POST' and request.user.has_perm('backend.can_add_article'):
            articleForm = ArticleForm(request.POST)
            images = request.FILES.getlist('images_files')
            glow = request.FILES.getlist('main_image')

            if articleForm.is_valid():
                article_form = articleForm.save(commit=False)
                article_form.author = request.user
                if glow:
                    article_form.main_image = glow[0]

                article_form.save()

                if images:
                    for img in images:
                        ArticleImage.objects.create(
                            article=article_form, img=img)

                return HttpResponseRedirect("/api/articles")

            else:
                print(articleForm.errors)
                # pass

        else:
            articleForm = ArticleForm()
            imagesForm = ImageForm()

            return render(request, 'articleForm.html', {'articleForm': articleForm, 'imagesForm': imagesForm})
    else:
        return HttpResponseRedirect('/')


# Lesson Plans
class LessonPlanView(generics.ListAPIView):
    queryset = LessonPlan.objects.all()
    serializer_class = LessonPlanSerializer


def groupsListView(request):
    file_path = LessonPlan.objects.last().excel_file.path

    l = []
    with xlrd.open_workbook(file_path) as file:
        sheet = file.sheet_by_index(0)

        for cell in sheet.row(2)[1:]:
            if cell.value:
                l.append(cell.value)
            else:
                break

    return JsonResponse({'classes': l})


def planForGoupView(request, *args, **kwargs):
    file_path = LessonPlan.objects.last().excel_file.path

    group = kwargs['group']
    ind_k = 0

    with xlrd.open_workbook(file_path) as file:
        sheet = file.sheet_by_index(0)

        for ind, cell in enumerate(sheet.row(2)):
            if cell.value == group:
                ind_k = ind

        l = []
        for day in range(0, 5):
            ld = []
            for i in range(3+36*day, 36*(day+1), 3):
                lk = {}
                if sheet.row(i)[ind_k].value:
                    lk['active'] = True
                    lk['lesson'] = sheet.row(i)[ind_k].value
                    lk['classroom'] = sheet.row(i+1)[ind_k].value
                    lk['teacher'] = sheet.row(i+2)[ind_k].value
                else:
                    lk['active'] = False

                ld.append(lk)
            l.append(ld)

    return JsonResponse({"plan": l})


def teacherListView(request):
    file_path = LessonPlan.objects.last().excel_file.path

    with xlrd.open_workbook(file_path) as file:
        sheet = file.sheet_by_index(3)

        teachers = []
        for i in range(1, sheet.nrows):
            row = sheet.row(i)
            if row[1].value:
                teacher = {
                    "name": row[1].value,
                    "short": row[2].value
                }
                print(teacher['name'])
                teachers.append(teacher)
            else:
                break

    return JsonResponse({"teachers": teachers})


def teacherPlanView(request, **kwargs):
    teacher = kwargs['teacher']

    file_path = LessonPlan.objects.last().excel_file.path

    with xlrd.open_workbook(file_path) as file:
        sheet = file.sheet_by_index(0)
        groups = []
        for cell in sheet.row(2)[1:]:
            if cell.value:
                groups.append(cell.value)
            else:
                break

        l = []
        for day in range(0, 5):
            ld = []
            print(3+36*day, 36*(day+1))
            for i in range(3+36*day, 36*(day+1), 3):
                lk = {
                    "active": False
                }
                for x in range(1, 25):
                    for t in sheet.row(i+2)[x].value.split('/'):
                        if teacher in t.split('/'):
                            lk['active'] = True
                            lk['group'] = groups[x-1]
                            lk['classroom'] = sheet.row(
                                i+1)[x].value.split('/')[t.split('/').index(teacher)]
                ld.append(lk)
            l.append(ld)

    return JsonResponse({"plan": l})
