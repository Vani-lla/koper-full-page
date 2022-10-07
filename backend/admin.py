from django.contrib import admin
from .models import *

admin.site.register(Article)
admin.site.register(ArticleImage)
admin.site.register(Category)
admin.site.register(File)
admin.site.register(LessonPlan)