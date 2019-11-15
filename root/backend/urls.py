from . import views
from django.urls import path, include
from rest_framework import routers


router = routers.DefaultRouter()
 
router.register('adds', views.AdvertisementsView, base_name='advertisements')
router.register('cities', views.CityView, base_name='city_view')
router.register('userselection', views.UserSelectedView, base_name="userselection")
 

urlpatterns =  router.urls
