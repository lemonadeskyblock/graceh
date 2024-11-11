from django.urls import path
from . import views

urlpatterns = [
    path("contributor/", views.landing_page, name = "landing_page")
]