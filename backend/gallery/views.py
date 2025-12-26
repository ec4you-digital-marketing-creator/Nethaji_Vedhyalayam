from rest_framework import viewsets
from .models import Event, Achievement
from .serializers import EventSerializer, AchievementSerializer

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.filter(is_active=True).order_by('-date')
    serializer_class = EventSerializer

class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievement.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = AchievementSerializer
