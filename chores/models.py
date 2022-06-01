from pydoc import describe
from django.db import models
from djmoney.models.fields import MoneyField
from djmoney.models.validators import MinMoneyValidator
from django.conf import settings
from datetime import date

# Create your models here.


class Chore(models.Model):
    assigned_user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='assigned_chore')
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=2500)
    image = models.ImageField(blank=True, upload_to='images')
    date_due = models.DateField(default=date.today)
    value = MoneyField(decimal_places=2, max_digits=4, default_currency='USD')

    def __str__(self):
        return self.name


