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

class ChildUser(models.Model):
    first_name=(models.CharField(null=True, blank=True, max_length=100))
    dob = (models.DateField(default=date.today))
    parent_account = (models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='child'))

    def __str__(self):
        return self.first_name

