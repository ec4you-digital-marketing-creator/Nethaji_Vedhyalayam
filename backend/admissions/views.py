from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
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

    def perform_create(self, serializer):
        instance = serializer.save()
        
        # Send Email Notification
        subject = f"New Admission Inquiry: {instance.student_name} - Class {instance.class_applied}"
        
        # Render HTML content
        html_message = render_to_string('emails/admission_inquiry.html', {'instance': instance, 'request': self.request})
        plain_message = strip_tags(html_message)
        
        recipient_list = ['nethajividhyalayam2016@gmail.com']
        
        try:
            print(f"Sending admission email to {recipient_list}...")
            send_mail(
                subject, 
                plain_message, 
                settings.DEFAULT_FROM_EMAIL, 
                recipient_list, 
                html_message=html_message,
                fail_silently=False
            )
            print("Admission email sent successfully.")
        except Exception as e:
            print(f"ERROR: Failed to send admission email: {e}")
