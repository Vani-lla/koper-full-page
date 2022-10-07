from django.urls import path
from django.views.generic import TemplateView
from django.shortcuts import render


def index(request, **kwargs):
    return render(request, 'index.html')


urlpatterns = [
    # URL list
    path('', index),
]
