from django.shortcuts import render
from django.urls import reverse
from . import templates
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import csv
from .models import Comments
 
import time
def delete_allcontent(request):

    #number_of_users = UsersnoPassword.objects.count()

    #print(f"There are {number_of_users} users in the Users model.")
    Comments.objects.all().delete()
    return HttpResponse('You did something Irreversible ! Congrats!')
# Create your views here.
def landing_page(request):
    return render(request, 'contributor.html')

def process_page(request):
    return render(request, 'process.html')
def index_page(request):
    context = {"all_comments": Comments.objects.all()}
    return render(request, 'index.html', context=context)
def team_page(request):
    return render(request, 'team.html')

def renderQuotes(request):  
    jsontext = {
    "0": "Grace Hopper",
    "1":"Leadership is a two-way street, loyalty up and loyalty down. Respect for one’s superiors; care for one’s crew \n \n- Grace Hopper",
    "2": "I have always been more interested in the future than in the past. - Grace Hopper",
    "3":"The glass is neither half empty nor half full. It’s simply larger than it needs to be. - Grace Hopper",
    "4":"The only phrase I’ve ever disliked is, 'Why, we’ve always done it that way.’ I always tell young people, ‘Go ahead and do it. You can always apologize later. - Grace Hopper",
    "5":"A ship in port is safe, but that is not what ships are built for. - Grace Hopper",
    "6":"In pioneer days they used oxen for heavy pulling, and when one ox couldn’t budge a log, they didn’t try to grow a larger ox. We shouldn’t be trying for bigger computers, but for more systems of computers. - Grace Hopper",
    "7":"We’ve tended to forget that no computer will ever ask a new question. - Grace Hopper",
    "8":"To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge. - Grace Hopper" 
    }
    time.sleep(10)
    return JsonResponse(jsontext)

def add_comment(request):
    if request.method =="POST":
        commenter = request.POST['commenter']
        comment = request.POST['comment']
        comment_object = Comments(commenter=commenter, comment=comment)
        comment_object.save()
    return HttpResponseRedirect(reverse('index_page'))
            


 