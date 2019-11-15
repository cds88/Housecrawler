from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import render

from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

from rest_framework import viewsets, permissions, generics
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import JsonResponse
from accounts.models import Profile
from backend.models import City
import json


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


@api_view(['POST'])
def registration_view(request):
    if request.method=='POST':
        #city = json.loads(request.data.decode('utf-8'))['city']
        city = request.data['city'] 
        serializer = RegisterSerializer(data=request.data)

        data = {}
        if serializer.is_valid():
            account = serializer.save()
            token = Token.objects.get(user=account).key
            userProfile=Profile.objects.get(user=account)
            if city:
                userProfile.city= City.objects.get(title=city)
  
            userProfile.save()
            
            data['response']= 'succesfully created response'
            data['token'] = token
           
            
           
            return  JsonResponse(data)

            
        else: 
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class LoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
    
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'city':  Profile.objects.get(user__pk=user.pk).city.title
             
        })








'''


class Register(viewsets.ModelViewSet):

    serializer_class = RegisterSerializer
    @action(methods=['post'], detail=False)
    def info(self, request):
        if request.method == 'POST':
            import json
            nazwa = json.loads(request.body.decode('utf-8'))['username']
            haslo = json.loads(request.body.decode('utf-8'))['password']
            haslo2 = json.loads(request.body.decode('utf-8'))['password2']
            print(request.data)
            serializer = self.get_serializer_class()(data=request.data)
            data = Response()
            if serializer.is_valid():
                account = serializer.save()
                data['response'] = 'succesfully registered a user'

                token = Token.objects.get(user=account).key
                data['token'] = token
                data['KURWA'] = "raz dwa trzy"
            else:
                data = serializer.error
            return Response(data)

'''    
