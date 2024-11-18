from django.urls import path
from . import views

urlpatterns = [
    path("contributor/", views.landing_page, name = "contributor_page"),
    path("process/", views.process_page, name ='process_page'),
    path("index/", views.index_page, name="index_page"),
    path("team/", views.team_page, name="team_page"),
    path("jsonquotes/", views.renderQuotes, name="renderquotes"),
]