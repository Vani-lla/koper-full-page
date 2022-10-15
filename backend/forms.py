from django import forms
from .models import *


class ArticleForm(forms.ModelForm):
    title = forms.CharField(max_length=100, label='Tytuł artykułu')
    content = forms.Textarea()
    main_image = forms.ImageField(required=False)

    categories = [
        ('s', 'Sport', ),
        ('b', 'Biblioteka', ),
        ('g', 'Strona główna', ),
        ('k', 'Konkursy', )
    ]

    category = forms.ChoiceField(choices=categories)

    class Meta:
        model = Article
        fields = ('title', 'content', 'category', 'main_image', )


class ImageForm(forms.ModelForm):
    # img = forms.ImageField(label='image')
    images_field = forms.ImageField(
        label='images:',
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
        required=False
    )

    class Meta:
        model = ArticleImage
        fields = ('images_field', )
