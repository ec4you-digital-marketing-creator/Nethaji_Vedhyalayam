from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from .models import ContactMessage, CareerApplication
from .serializers import ContactMessageSerializer, CareerApplicationSerializer

class ContactMessageViewSet(mixins.CreateModelMixin,
                            mixins.ListModelMixin,
                            mixins.RetrieveModelMixin,
                            viewsets.GenericViewSet):
    """
    API endpoint that allows contact messages to be created.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny] # Allow anyone to submit a contact form

    def perform_create(self, serializer):
        instance = serializer.save()
        
        # Send Email Notification
        subject = f"New Contact Message: {instance.subject} - {instance.name}"
        
        # Render HTML content
        html_message = render_to_string('emails/contact_message.html', {'instance': instance, 'request': self.request})
        plain_message = strip_tags(html_message)
        
        recipient_list = ['nethajividhyalayam2016@gmail.com']
        
        try:
            print(f"Sending contact email to {recipient_list}...")
            send_mail(
                subject, 
                plain_message, 
                settings.DEFAULT_FROM_EMAIL, 
                recipient_list, 
                html_message=html_message,
                fail_silently=False
            )
            print("Contact email sent successfully.")
        except Exception as e:
            print(f"ERROR: Failed to send contact email: {e}")

class CareerApplicationViewSet(mixins.CreateModelMixin,
                               mixins.ListModelMixin,
                               mixins.RetrieveModelMixin,
                               viewsets.GenericViewSet):
    """
    API endpoint that allows career applications to be created.
    """
    queryset = CareerApplication.objects.all()
    serializer_class = CareerApplicationSerializer
    permission_classes = [AllowAny] # Allow anyone to submit an application

    def perform_create(self, serializer):
        instance = serializer.save()
        
        # Send Email Notification
        subject = f"New Career Application: {instance.name}"
        
        # Render HTML content
        html_message = render_to_string('emails/career_application.html', {'instance': instance, 'request': self.request})
        plain_message = strip_tags(html_message)
        
        recipient_list = ['nethajividhyalayam2016@gmail.com']
        
        try:
            print(f"Sending career email to {recipient_list}...")
            # Use EmailMultiAlternatives to enable attachments
            from django.core.mail import EmailMultiAlternatives
            
            email = EmailMultiAlternatives(
                subject,
                plain_message,
                settings.DEFAULT_FROM_EMAIL,
                recipient_list
            )
            email.attach_alternative(html_message, "text/html")
            
            # Attach resume if it exists
            if instance.resume:
                # Read file content
                # Read file content
                try:
                    import mimetypes
                    file_path = instance.resume.path
                    content_type, encoding = mimetypes.guess_type(file_path)
                    if content_type is None:
                        content_type = 'application/octet-stream'
                        
                    with open(file_path, 'rb') as f:
                        file_content = f.read()
                        email.attach(instance.resume.name, file_content, content_type)
                except Exception as file_error:
                    print(f"Warning: Could not attach file: {file_error}")
            
            email.send(fail_silently=False)
            print("Career email sent successfully with attachment.")
        except Exception as e:
            print(f"ERROR: Failed to send career email: {e}")
