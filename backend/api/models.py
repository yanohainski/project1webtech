from django.db import models

# Create your models here.
# Create our Models, that will be used to create our database tables and there Data
# for our Appointment Class we have a name, start_date and end_date, the Name will be defined by a charfield, the start_date and end_date will be defined by a DateTimeField
# the __str__ method will return the name of the appointment, this will be shown in the Django Admin Panel

class Appointments(models.Model):
    title = models.CharField(max_length=100)
    start = models.DateTimeField()
    end = models.DateTimeField()

    def __str__(self):
        return self.title
    

# for our User Class we have a name, email and password, the name will be defined by a charfield, the email will be defined by an EmailField and the password will be defined by a charfield
# the __str__ method will return the name of the User, this will be shown in the Django Admin Panel

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
#unfortuantely we could not get the User Class to work in time, so we will not be able to use it in our API. This has to do something with djangos default user sys