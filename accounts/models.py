from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date
# Create your models here.
class CustomUser(AbstractUser):
    username =(models.CharField(unique=True, max_length=50))
    email=(models.EmailField(null=True))
    first_name=(models.CharField(null=True, blank=True, max_length=100))
    last_name=(models.CharField(null=True, blank=True, max_length=100))
    is_parent=models.BooleanField(default=False)

    def __str__(self):
        return self.username
