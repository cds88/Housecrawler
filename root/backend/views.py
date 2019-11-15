from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import render
 
from rest_framework.decorators import api_view, action, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from .serializers import  AdvertisementSerializer, CitySerializer, UserSelectedAdvertisementSerializer

from .models import Advertisement, City, UserSelectedAdvertisement
from rest_framework import viewsets, permissions, generics
from rest_framework.authtoken.models import Token


from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
 
from django.contrib.auth.models import User
 
from rest_framework import status
 

class AdvertisementsView(viewsets.ModelViewSet):
    serializer_class = AdvertisementSerializer
    queryset = Advertisement.objects.all()
    filter_fields=('city__title',)
 

class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()


class UserSelectedView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = UserSelectedAdvertisementSerializer
    queryset = UserSelectedAdvertisement.objects.all()

    def create(self, request, *args, **kwargs):
        result={}
        result['advertisement']=request.data['advertisement']
        result['user'] = request.user.pk
        serializer = self.get_serializer(data=result)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)    
