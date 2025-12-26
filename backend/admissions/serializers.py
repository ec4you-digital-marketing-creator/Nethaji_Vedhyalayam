from rest_framework import serializers
from .models import (AdmissionsPageContent, AdmissionStep, AgeCriterion, 
                    RequiredDocument, AdmissionsFAQ, AdmissionInquiry)

class AdmissionsPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionsPageContent
        fields = '__all__'

class AdmissionStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionStep
        fields = '__all__'

class AgeCriterionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgeCriterion
        fields = '__all__'

class RequiredDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredDocument
        fields = '__all__'

class AdmissionsFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionsFAQ
        fields = '__all__'

class AdmissionInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionInquiry
        fields = '__all__'
