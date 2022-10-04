from django.contrib import admin



from .models import CustomUser, ChildUser



admin.site.register(CustomUser)
admin.site.register(ChildUser)