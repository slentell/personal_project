
from .models import Chore
from .serializers import ChoreSerializer
from rest_framework import viewsets


from rest_framework.permissions import IsAuthenticated


class ChoreViewSet(viewsets.ModelViewSet):
    queryset = Chore.objects.all()
    serializer_class = ChoreSerializer
    permission_classes = [IsAuthenticated]

