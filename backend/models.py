from django.db import models
from django.conf import settings


class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    short = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True, editable=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    main_image = models.ImageField(null=True)

    categories = [
        ('s', 'Sport', ),
        ('b', 'Biblioteka', ),
        ('g', 'Strona główna', ),
        ('k', 'Konkursy', )
    ]

    category = models.CharField(max_length=1, choices=categories)

    def __str__(self):
        return self.title


class ArticleImage(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    img = models.ImageField(null=True)

    def __str__(self):
        return f'"{self.article.title}" - Image #{self.id}'


class FileCategory(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class File(models.Model):
    file = models.FileField(upload_to='files')
    category = models.ForeignKey(
        FileCategory, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.file.name


class LessonPlan(models.Model):
    date = models.DateField(auto_now_add=True, editable=True)
    start_date = models.DateField()

    excel_file = models.FileField(upload_to='plans')
