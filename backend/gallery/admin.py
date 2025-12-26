from django.contrib import admin
from .models import Event, Achievement

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title',)

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title',)
