from rest_framework import serializers
from .models import Chore

class ChoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chore
        fields = ('pk', 'assigned_user', 'name', 'description', 'image', 'date_due', 'value')
