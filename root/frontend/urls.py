
 
from django.urls import path 
from . import views

urlpatterns =[
    path('', views.homepage),
    path('der/', views.homepage),
    path('accounts/', views.homepage),
    path('map/', views.homepage),
    path('profile/', views.homepage),
    path('advertisements/', views.homepage)
    
 
]
