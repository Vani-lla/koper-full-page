from rest_framework import serializers
from .models import *


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        # fields = ['id', 'title', 'content', 'date', 'category']
        fields = '__all__'


class ArticleDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'main_image', 'date']


class ArticleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleImage
        fields = '__all__'


class LessonPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = LessonPlan
        fields = '__all__'
