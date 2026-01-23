
import os
import django
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

# Mock an instance object for the template
class MockInstance:
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
            
    def get_subject_display(self):
        return getattr(self, 'subject', 'General Question').title()
        
    def get_experience_display(self):
        return getattr(self, 'experience', 'Fresher').title()

def test_html_email():
    print("Preparing to send HTML test email...")
    
    # Create a mock ContactMessage instance
    instance = MockInstance(
        id=1,
        subject='general',
        name='Test User',
        email='testuser@example.com',
        phone='1234567890',
        message='This is a test message to verify the HTML email template design.',
        created_at=None 
    )
    
    # We need to manually add created_at as datetime if we want to test that filter, 
    # but for simplicity let's skip complex objects or import datetime
    from datetime import datetime
    instance.created_at = datetime.now()

    try:
        # Mock request host
        class MockRequest:
            def get_host(self):
                return "localhost:8000"
        
        request = MockRequest()

        # Render HTML content
        html_message = render_to_string('emails/contact_message.html', {'instance': instance, 'request': request})
        plain_message = strip_tags(html_message)
        
        recipient_list = ['nethajividhyalayam2016@gmail.com']

        print("Sending HTML email...")
        send_mail(
            'HTML Email Test: Contact Message', 
            plain_message, 
            settings.DEFAULT_FROM_EMAIL, 
            recipient_list, 
            html_message=html_message,
            fail_silently=False
        )
        print("SUCCESS: HTML Email sent successfully.")
    except Exception as e:
        print(f"FAILURE: Could not send HTML email. Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_html_email()
