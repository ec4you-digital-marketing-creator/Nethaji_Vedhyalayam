from django.db import models

class FacilitiesPageContent(models.Model):
    # Hero Section
    hero_title = models.CharField(max_length=200, default="Our Facilities")
    hero_description = models.CharField(max_length=255, default="World-class infrastructure for holistic development")
    hero_image = models.ImageField(upload_to='facilities/', blank=True, null=True)

    # Intro Section
    intro_badge = models.CharField(max_length=100, default="Infrastructure")
    intro_title = models.CharField(max_length=200, default="Where Learning Meets Excellence")
    intro_description_1 = models.TextField(default="At Nethaji Vidyalayam, we believe that a conducive learning environment is essential for academic and personal growth. Our campus is equipped with state-of-the-art facilities designed to support every aspect of a child's development—from academics to sports, arts, and overall well-being.")
    intro_description_2 = models.TextField(default="Safety, hygiene, and accessibility are our top priorities, ensuring that every student has the resources they need to excel.")

    # Tech Integration Section
    tech_badge = models.CharField(max_length=100, default="Digital Learning")
    tech_title = models.CharField(max_length=200, default="Technology-Integrated Education")
    tech_description = models.TextField(default="We leverage technology to enhance learning outcomes. Every classroom is equipped with interactive smart boards, projectors, and high-speed internet. Students have access to online learning portals, digital assignments, and e-library resources.")
    tech_image = models.ImageField(upload_to='facilities/', blank=True, null=True)

    # Green Initiatives Section
    green_title = models.CharField(max_length=200, default="Eco-Friendly Campus")
    green_description = models.TextField(default="Committed to sustainability and environmental responsibility.")

    # CTA Section
    cta_title = models.CharField(max_length=200, default="Experience Our Campus")
    cta_description = models.TextField(default="Schedule a campus visit or take a virtual tour to see our facilities in action.")

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "Facilities Page Content"

    class Meta:
        verbose_name = "Facilities Page Content"
        verbose_name_plural = "Facilities Page Content"

class Facility(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='facilities/main/')
    icon_name = models.CharField(max_length=50, help_text="Lucide icon name (e.g. FlaskConical, Laptop, BookOpen)")
    features = models.JSONField(default=list, help_text="List of features as a JSON array (e.g. ['Feature 1', 'Feature 2'])")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']
        verbose_name = "Facility"
        verbose_name_plural = "Facilities"

class FacilityStat(models.Model):
    number = models.CharField(max_length=50)
    label = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.number} {self.label}"

    class Meta:
        ordering = ['order']

class SafetyFeature(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon_name = models.CharField(max_length=50, default="Shield")
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']

class TechItem(models.Model):
    text = models.CharField(max_length=255)
    icon_name = models.CharField(max_length=50, default="Wifi")
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.text

    class Meta:
        ordering = ['order']

class GreenInitiative(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']

class FacilityTestimonial(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    text = models.TextField()
    rating = models.PositiveIntegerField(default=5)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.role}"

    class Meta:
        ordering = ['order']

class Certification(models.Model):
    text = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.text

    class Meta:
        ordering = ['order']
