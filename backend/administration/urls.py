from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import StudentViewSet, EnquiryViewSet, CareerApplicationViewSet

router = SimpleRouter()
router.register(r'students', StudentViewSet)
router.register(r'enquiries', EnquiryViewSet)
router.register(r'careers', CareerApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
