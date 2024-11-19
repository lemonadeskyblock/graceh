from django.db import models
from django import forms

# Create your models here.
class Comments(models.Model):
    comment = models.CharField(max_length = 500)
    commenter = models.CharField(max_length=30)