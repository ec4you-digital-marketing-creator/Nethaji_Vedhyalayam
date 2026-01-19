from rest_framework import serializers
from .models import HeroVideo, HomeAbout, TeamMember, Facility, Testimonial, AboutPageContent, CoreValue, HistoryPageContent, Milestone, Poster, FeePayment, PaymentQR

class HeroVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroVideo
        fields = ['id', 'title', 'video_url', 'video_file', 'thumbnail', 'is_active']

class HomeAboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAbout
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class AboutPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPageContent
        fields = '__all__'

class CoreValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoreValue
        fields = '__all__'

class HistoryPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryPageContent
        fields = '__all__'

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = '__all__'

class PosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poster
        fields = '__all__'

class FeePaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeePayment
        fields = '__all__'

class PaymentQRSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentQR
        fields = '__all__'
