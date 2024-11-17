from django.shortcuts import render
from . import templates
from django.http import HttpResponse

# Create your views here.
def landing_page(request):
    return render(request, 'contributor.html')

def process_page(request):
    return render(request, 'process.html')
def index_page(request):
    return render(request, 'index.html')
def team_page(request):
    return render(request, 'team.html')