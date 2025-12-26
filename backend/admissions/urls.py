from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import (AdmissionsPageContentViewSet, AdmissionStepViewSet, 
                    AgeCriterionViewSet, RequiredDocumentViewSet, 
                    AdmissionsFAQViewSet, AdmissionInquiryViewSet)

router = SimpleRouter()
router.register(r'page-content', AdmissionsPageContentViewSet, basename='admissions-page-content')
router.register(r'steps', AdmissionStepViewSet, basename='admission-step')
router.register(r'age-criteria', AgeCriterionViewSet, basename='age-criterion')
router.register(r'documents', RequiredDocumentViewSet, basename='required-document')
router.register(r'faqs', AdmissionsFAQViewSet, basename='admissions-faq')
router.register(r'inquiries', AdmissionInquiryViewSet, basename='admission-inquiry')

urlpatterns = [
    path('', include(router.urls)),
]
