from rest_framework import serializers
from .models import *

# Create our serializers, that will be used to convert our data to JSON format, 
# this will be passed to our API and therefore to our frontend
# We have two serializers, AppointmentsSerializer and UserSerializer. They both inherit from the ModelSerializer class. 
# in the fields attribute we define which fields of our models we want to be shown in the JSON response, 
# for the Appointments model we want to show the title, start and end fields, for the User model we want to show all fields


class AppointmentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointments
        fields = ('title', 'start', 'end')



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'