from django.urls import path, re_path
from django.views.generic import TemplateView
from django.shortcuts import render

from subprocess import check_output

def index(request, **kwargs):
    return render(request, 'index.html')

def phptest(request):
    return render(request, 'main.php')


urlpatterns = [
    # URL list
    path('php', phptest),
    re_path(r'', index),
]