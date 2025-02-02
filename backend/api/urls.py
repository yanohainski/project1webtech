from django.contrib import admin
from django.urls import path 
from .views import *
from rest_framework.routers import DefaultRouter

#here our API routes are defined
#we have two routes, one for appointments and one for users


router = DefaultRouter()
router.register('appointments', AppointmentViewset, basename='appointments')
router.register('user', UserViewset, basename='user')
urlpatterns = router.urls




