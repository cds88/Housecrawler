from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Advertisement, City, UserSelectedAdvertisement


 

class AdvertisementSerializer(serializers.ModelSerializer):
    city_name = serializers.SerializerMethodField('get_city_name')
    class Meta:
        model = Advertisement
        fields = ["title", "price", "description", "thumb", "gallery", "size", "adress", "dateCreated", "city_name"]
       

    def get_city_name(self,Advertisement):
        city_name = Advertisement.city.title
        return city_name



class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model= City 
        fields= '__all__'


class UserSelectedAdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSelectedAdvertisement
        fields= '__all__'