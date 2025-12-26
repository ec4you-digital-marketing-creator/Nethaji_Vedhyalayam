from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import (AdmissionsPageContent, AdmissionStep, AgeCriterion, 
                    RequiredDocument, AdmissionsFAQ, AdmissionInquiry)
from .serializers import (AdmissionsPageContentSerializer, AdmissionStepSerializer, 
                          AgeCriterionSerializer, RequiredDocumentSerializer, 
                          AdmissionsFAQSerializer, AdmissionInquirySerializer)

class AdmissionsPageContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionsPageContent.objects.all()
    serializer_class = AdmissionsPageContentSerializer

    @action(detail=False, methods=['get'], url_path='current')
    def get_current(self, request):
        content = self.get_queryset().first()
        if content:
            serializer = self.get_serializer(content)
            return Response(serializer.data)
        return Response({"detail": "Not found."}, status=404)

class AdmissionStepViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionStep.objects.filter(is_active=True).order_by('order')
    serializer_class = AdmissionStepSerializer

class AgeCriterionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AgeCriterion.objects.all().order_by('order')
    serializer_class = AgeCriterionSerializer

class RequiredDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RequiredDocument.objects.filter(is_active=True).order_by('order')
    serializer_class = RequiredDocumentSerializer

class AdmissionsFAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionsFAQ.objects.filter(is_active=True).order_by('order')
    serializer_class = AdmissionsFAQSerializer

class AdmissionInquiryViewSet(viewsets.ModelViewSet):
    queryset = AdmissionInquiry.objects.all()
    serializer_class = AdmissionInquirySerializer
