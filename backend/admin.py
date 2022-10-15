from django.contrib import admin
from .models import *

admin.site.register(Article)
admin.site.register(ArticleImage)
admin.site.register(FileCategory)
admin.site.register(File)
admin.site.register(LessonPlan)