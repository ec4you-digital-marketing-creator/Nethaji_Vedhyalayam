
import os
import django
from django.conf import settings
from django.core.mail import send_mail

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

def test_email():
    print("Attempting to send test email...")
    try:
        send_mail(
            'Test Email from Nethaji Project',
            'If you see this, the email configuration is working correctly.',
            settings.DEFAULT_FROM_EMAIL,
            ['nethajividhyalayam2016@gmail.com'],
            fail_silently=False,
        )
        print("SUCCESS: Email sent successfully.")
    except Exception as e:
        print(f"FAILURE: Could not send email. Error: {e}")

if __name__ == "__main__":
    test_email()
