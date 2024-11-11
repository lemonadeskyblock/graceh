from django.shortcuts import render
from . import templates
from django.http import HttpResponse

# Create your views here.
def landing_page(request):
    return render(request, 'contributor.html')
