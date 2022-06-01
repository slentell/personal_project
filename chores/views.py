
from .models import Chore
from .serializers import ChoreSerializer
from rest_framework import viewsets


class ChoreViewSet(viewsets.ModelViewSet):
    queryset = Chore.objects.all()
    serializer_class = ChoreSerializer

