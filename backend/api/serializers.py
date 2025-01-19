from rest_framework import serializers
from .models import *



class AppointmentsSerializer(serializers.ModelSerializer):

    title = serializers.CharField(source='name')
    start = serializers.DateTimeField(source='start_date')
    end = serializers.DateTimeField(source='end_date')

    class Meta:
        model = Appointments
        fields = ('title', 'start', 'end')



