from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import EventViewSet, AchievementViewSet

router = SimpleRouter()
router.register(r'events', EventViewSet, basename='event')
router.register(r'achievements', AchievementViewSet, basename='achievement')

urlpatterns = [
    path('', include(router.urls)),
]
