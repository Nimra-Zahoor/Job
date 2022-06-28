from rest_framework import serializers
from .models import *

class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

class JobModelSerializers(serializers.ModelSerializer):
    class Meta:
        model=JobModel
        fields='__all__'
