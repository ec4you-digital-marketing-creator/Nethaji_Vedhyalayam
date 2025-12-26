from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    description = models.TextField()
    image = models.ImageField(upload_to='events/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date']
        verbose_name = "Event"
        verbose_name_plural = "Events"

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=10, help_text="e.g. 2023 or 2023-24")
    image = models.ImageField(upload_to='achievements/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Achievement"
        verbose_name_plural = "Achievements"
