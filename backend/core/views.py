from rest_framework import viewsets, generics
from .models import HeroVideo, HomeAbout, TeamMember, Facility, Testimonial, AboutPageContent, CoreValue, HistoryPageContent, Milestone, Poster, FeePayment, PaymentQR
from .serializers import (HeroVideoSerializer, HomeAboutSerializer, TeamMemberSerializer, 
                          FacilitySerializer, TestimonialSerializer, AboutPageContentSerializer, 
                          CoreValueSerializer, HistoryPageContentSerializer, MilestoneSerializer, PosterSerializer,
                          FeePaymentSerializer, PaymentQRSerializer)
from rest_framework.response import Response
from rest_framework.decorators import action

class HeroVideoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroVideo.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = HeroVideoSerializer

    @action(detail=False, methods=['get'])
    def current(self, request):
        hero = self.queryset.first()
        if hero:
            serializer = self.get_serializer(hero)
            return Response(serializer.data)
        return Response({})

class HomeAboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeAbout.objects.filter(is_active=True).order_by('-updated_at')
    serializer_class = HomeAboutSerializer

    @action(detail=False, methods=['get'])
    def current(self, request):
        about = self.queryset.first()
        if about:
            serializer = self.get_serializer(about)
            return Response(serializer.data)
        return Response({})

class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.filter(is_active=True).order_by('order', 'created_at')
    serializer_class = TeamMemberSerializer

class FacilityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Facility.objects.filter(is_active=True).order_by('order', 'created_at')
    serializer_class = FacilitySerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True).order_by('order', '-created_at')
    serializer_class = TestimonialSerializer

class AboutPageContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutPageContent.objects.filter(is_active=True)
    serializer_class = AboutPageContentSerializer

    @action(detail=False, methods=['get'], url_path='current')
    def get_current(self, request):
        content = self.get_queryset().first()
        if content:
            serializer = self.get_serializer(content)
            return Response(serializer.data)
        return Response({})

class CoreValueViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CoreValue.objects.filter(is_active=True).order_by('order')
    serializer_class = CoreValueSerializer

class HistoryPageContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HistoryPageContent.objects.all()
    serializer_class = HistoryPageContentSerializer

    @action(detail=False, methods=['get'], url_path='current')
    def get_current(self, request):
        content = self.get_queryset().first()
        if content:
            serializer = self.get_serializer(content)
            return Response(serializer.data)
        return Response({})

class MilestoneViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Milestone.objects.filter(is_active=True).order_by('order', 'year')
    serializer_class = MilestoneSerializer

class PosterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Poster.objects.filter(is_active=True).order_by('-updated_at')
    serializer_class = PosterSerializer

    @action(detail=False, methods=['get'])
    def current(self, request):
        poster = self.queryset.first()
        if poster:
            serializer = self.get_serializer(poster)
            return Response(serializer.data)
        return Response({})

from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class FeePaymentCreateView(generics.CreateAPIView):
    queryset = FeePayment.objects.all()
    serializer_class = FeePaymentSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        
        # Send Email Notification
        subject = f"New Fee Payment Initiated: {instance.student_name} - Grade {instance.grade}"
        
        # Render HTML content
        html_message = render_to_string('emails/fee_payment.html', {'instance': instance, 'request': self.request})
        plain_message = strip_tags(html_message)
        
        recipient_list = ['nethajividhyalayam2016@gmail.com']
        
        try:
            print(f"Sending fee payment email to {recipient_list}...")
            email = EmailMultiAlternatives(
                subject,
                plain_message,
                settings.DEFAULT_FROM_EMAIL,
                recipient_list
            )
            email.attach_alternative(html_message, "text/html")
            email.send(fail_silently=False)
            print("Fee payment email sent successfully.")
        except Exception as e:
            print(f"ERROR: Failed to send fee payment email: {e}")

class PaymentQRView(generics.RetrieveAPIView):
    queryset = PaymentQR.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = PaymentQRSerializer

    def get_object(self):
        return self.queryset.first()
