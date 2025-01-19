from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from .models import *


# Create your views here.

class AppointmentViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Appointments.objects.all()
    serializer_class = AppointmentsSerializer 

    def list(self, request):
        queryset = Appointments.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        