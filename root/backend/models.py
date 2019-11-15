from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
 
 

class City(models.Model):
    title = models.TextField()
    size = models.IntegerField(null=True, blank=True)
    population = models.IntegerField(null=True, blank=True)
    density = models.IntegerField(null=True, blank=True)

    def __repr__(self):
        return self.title
    
    def url(self):
        return 'https://www.olx.pl/nieruchomosci/mieszkania/wynajem/%s/'%(self.title)


class Advertisement(models.Model):
    city         =      models.ForeignKey(City, on_delete=models.CASCADE, related_name='advertisements')
    title        =      models.TextField()
    price        =      models.TextField()
    description  =      models.TextField()
    thumb        =      models.TextField()
    gallery      =      models.TextField()


    size         =      models.TextField()

    adress       =      models.TextField()
    dateCreated  =      models.DateTimeField(auto_now=True)

    def city_name(self):
        return self.city.title

    

class Image(models.Model):
    advertisement = models.ForeignKey(Advertisement, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField()
    url = models.TextField()


class UserSelectedAdvertisement(models.Model):
    advertisement = models.ForeignKey(Advertisement, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="selectedadvertisements")


 