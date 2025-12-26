from rest_framework import serializers
from .models import (FacilitiesPageContent, Facility, FacilityStat, 
                    SafetyFeature, TechItem, GreenInitiative, 
                    FacilityTestimonial, Certification)

class FacilitiesPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilitiesPageContent
        fields = '__all__'

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'

class FacilityStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityStat
        fields = '__all__'

class SafetyFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafetyFeature
        fields = '__all__'

class TechItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechItem
        fields = '__all__'

class GreenInitiativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GreenInitiative
        fields = '__all__'

class FacilityTestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacilityTestimonial
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
