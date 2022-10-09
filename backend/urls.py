from django.urls import path
from .views import *

urlpatterns = [
   # URL list
   path('', index),

   # Articles
   path('articles/', ArticleView.as_view()),
   path('articles/<category>', ArticleCategoraizedView.as_view()),
   path('article/<articleID>', ArticleSingleView.as_view()),
   path('images/<articleID>', ImagesView.as_view()),
   path('articles/display/<limit>', ArticleDisplayView.as_view()),

   # Article creation & authentication
   path('login/', loginView),
   path('logout/', logoutView),
   path('login/article-form/', articleCreateView),

   # Plans
   path("classes/", groupsListView),
   path("teachers/", teacherListView),
   path("plan/", LessonPlanView().as_view()),
   path("plan/teacher/<teacher>", teacherPlanView),
   path("plan/<group>", planForGoupView),
]
