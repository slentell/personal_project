from django.shortcuts import render
from .models import CustomUser
from .serializer import CustomUserSerializer
from rest_framework import viewsets

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer