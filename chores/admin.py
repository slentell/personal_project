from django.contrib import admin

from accounts.models import ChildUser, CustomUser
from .models import Chore
# Register your models here.

admin.site.register(Chore)

