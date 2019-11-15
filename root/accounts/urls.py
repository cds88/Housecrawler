

from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', views.registration_view , name='register' ),
    path('login/', views.LoginView.as_view(), name='login'),
     path('logout/', views.Logout.as_view(), name='logout')
]


# path('login/', obtain_auth_token, name='login'),
