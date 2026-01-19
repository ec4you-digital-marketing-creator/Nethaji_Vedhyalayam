from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (HeroVideoViewSet, HomeAboutViewSet, TeamMemberViewSet, 
                    FacilityViewSet, TestimonialViewSet, AboutPageContentViewSet, 
                    CoreValueViewSet, HistoryPageContentViewSet, MilestoneViewSet, PosterViewSet,
                    FeePaymentCreateView, PaymentQRView)

router = DefaultRouter()
router.register(r'hero-videos', HeroVideoViewSet, basename='hero-video')
router.register(r'home-about', HomeAboutViewSet, basename='home-about')
router.register(r'team', TeamMemberViewSet, basename='team')
router.register(r'facilities', FacilityViewSet, basename='facility')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'about-page-content', AboutPageContentViewSet, basename='about-page-content')
router.register(r'core-values', CoreValueViewSet, basename='core-value')
router.register(r'history-page-content', HistoryPageContentViewSet, basename='history-page-content')
router.register(r'milestones', MilestoneViewSet, basename='milestone')
router.register(r'posters', PosterViewSet, basename='poster')

urlpatterns = [
    path('', include(router.urls)),
    path('fee-payments/', FeePaymentCreateView.as_view(), name='fee-payment-create'),
    path('payment-qr/', PaymentQRView.as_view(), name='payment-qr'),
]
