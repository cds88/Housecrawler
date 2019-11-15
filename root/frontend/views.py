 
from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from pprint import pprint
from django.http import HttpResponseRedirect
from django.shortcuts import render, HttpResponse
# Create your views here.

def homepage(request):
    return render(request, "frontend/Index.html")

 