from django.db import models
from ckeditor.fields import RichTextField

class HeroVideo(models.Model):
    title = models.CharField(max_length=200, default="Welcome to Nethaji Vidyalayam")
    video_url = models.URLField(max_length=500, blank=True, null=True, help_text="Direct link to external video (optional if file uploaded)")
    video_file = models.FileField(upload_to='hero_videos/', blank=True, null=True, help_text="Upload local video file (optional if URL provided)")
    thumbnail = models.ImageField(upload_to='hero_videos/thumbnails/', blank=True, null=True, help_text="Image to show while video is loading")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Hero Video"
        verbose_name_plural = "Hero Videos"

class HomeAbout(models.Model):
    sub_heading = models.CharField(max_length=200, default="Welcome to Nethaji")
    heading = models.CharField(max_length=200, default="Nurturing the Future Leaders")
    description = RichTextField(help_text="Provide the about section description.")
    button_text = models.CharField(max_length=100, default="Discover Our Story")
    button_link = models.CharField(max_length=200, default="/about")
    
    # Mosaic Grid Images
    image1 = models.ImageField(upload_to='home_about/', help_text="Main vertical image")
    image2 = models.ImageField(upload_to='home_about/', help_text="Top right image")
    image3 = models.ImageField(upload_to='home_about/', help_text="Bottom right image")
    
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.heading

    class Meta:
        verbose_name = "Home About Section"
        verbose_name_plural = "Home About Section"

class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200, help_text="e.g. Founder, Correspondent, Principal")
    photo = models.ImageField(upload_to='team/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0, help_text="Higher number means lower priority in display.")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.role})"

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "Team Member"
        verbose_name_plural = "Team Members"

class Facility(models.Model):
    title = models.CharField(max_length=200)
    icon_name = models.CharField(max_length=50, help_text="Lucide icon name (e.g. Zap, BookOpen, Trophy, Users, Smile)")
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "Facility"
        verbose_name_plural = "Facilities"

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200, help_text="e.g. Parent of Grade 5 Student")
    content = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Testimonial by {self.name}"

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

class AboutPageContent(models.Model):
    # Hero Section
    hero_title = models.CharField(max_length=200, default="A Legacy of Excellence")
    hero_sub_title = models.CharField(max_length=200, default="Who We Are")
    hero_description = models.TextField(default="Since 2001, Nethaji Vidyalayam has been a beacon of knowledge, shaping young minds into global leaders.")
    hero_image = models.ImageField(upload_to='about_page/', blank=True, null=True)
    
    # Our Story Section
    story_sub_heading = models.CharField(max_length=200, default="Our Story")
    story_heading = models.CharField(max_length=200, default="From Humble Beginnings to Educational Excellence")
    story_description = RichTextField()
    story_image = models.ImageField(upload_to='about_page/', blank=True, null=True)
    
    # Stats
    stat1_value = models.CharField(max_length=50, default="20+")
    stat1_label = models.CharField(max_length=100, default="Years of Service")
    stat2_value = models.CharField(max_length=50, default="5000+")
    stat2_label = models.CharField(max_length=100, default="Alumni Network")

    # Vision & Mission
    vision_text = models.TextField(default="To be a global leader in education, fostering a culture of innovation, integrity, and inclusivity, where every student is empowered to realize their full potential.")
    mission_text = RichTextField(default="<ul><li>Provide a safe and stimulating learning environment.</li><li>Encourage critical thinking and creativity.</li><li>Instill strong moral values and social responsibility.</li></ul>", help_text="Use a bulleted list for mission items.")

    # Leadership Preview
    principal_image = models.ImageField(upload_to='about_page/', blank=True, null=True)
    principal_name = models.CharField(max_length=200, default="Dr. Vijay Kumar")
    principal_title = models.CharField(max_length=200, default="Principal")
    principal_quote = models.TextField(default="Education is the most powerful weapon which you can use to change the world. At Nethaji, we don't just teach; we inspire.")
    
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "About Page Content"

    class Meta:
        verbose_name = "About Page Content"
        verbose_name_plural = "About Page Content"

class CoreValue(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon_name = models.CharField(max_length=50, help_text="Lucide icon name (e.g. Heart, Zap, Users, Shield)")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']
        verbose_name = "Core Value"
        verbose_name_plural = "Core Values"

class HistoryPageContent(models.Model):
    # Hero Section
    hero_title = models.CharField(max_length=200, default="Our Journey")
    hero_subtitle = models.CharField(max_length=100, default="EST. 2001")
    hero_description = models.TextField(default="From a small classroom to a leading institution, explore the milestones that define our legacy.")
    hero_image = models.ImageField(upload_to='history/', blank=True, null=True)

    # CTA Section
    cta_title = models.CharField(max_length=200, default="Be Part of Our Future")
    cta_description = models.TextField(default="The story of Nethaji Vidyalayam is still being written. Join us and help shape the next chapter of excellence.")

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "History Page Content"

    class Meta:
        verbose_name = "History Page Content"
        verbose_name_plural = "History Page Content"

class Milestone(models.Model):
    year = models.CharField(max_length=10)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='milestones/', blank=True, null=True)
    icon_name = models.CharField(max_length=50, help_text="Lucide icon name (e.g. Building, TrendingUp, Calendar, Award)")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.year} - {self.title}"

    class Meta:
        ordering = ['order', 'year']
        verbose_name = "Milestone"
        verbose_name_plural = "Milestones"

class Poster(models.Model):
    tag_text = models.CharField(max_length=100, default="Vijaya Dhasami 2025")
    header_sub_title = models.CharField(max_length=200, default="Est. 2001 | 25 Years of Excellence")
    title = models.CharField(max_length=200, default="ADMISSIONS OPEN NOW")
    sub_title = models.CharField(max_length=200, default="PreKG TO 5th Grade")
    discount_text = models.CharField(max_length=100, default="50% DISCOUNT")
    discount_sub_text = models.CharField(max_length=100, default="On Tuition Fee")
    extra_benefit = models.CharField(max_length=100, default="No Donation")
    event_tag = models.CharField(max_length=100, default="Special Initiation")
    event_date = models.CharField(max_length=100, default="2 OCT, 10 AM")
    event_name = models.CharField(max_length=100, default="AKSHARABHYASAM")
    event_sub_name = models.CharField(max_length=100, default="Event Celebration")
    location = models.CharField(max_length=200, default="Medavakkam, Chennai")
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Poster"
        verbose_name_plural = "Posters"

class FeePayment(models.Model):
    student_name = models.CharField(max_length=200)
    parent_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    grade = models.CharField(max_length=50)
    section = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment Init: {self.student_name} ({self.grade})"

    class Meta:
        verbose_name = "Fee Payment"
        verbose_name_plural = "Fee Payments"
        ordering = ['-created_at']

class PaymentQR(models.Model):
    name = models.CharField(max_length=100, default="Default QR")
    qr_image = models.ImageField(upload_to='payment_qr/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {'Active' if self.is_active else 'Inactive'}"

    class Meta:
        verbose_name = "Payment QR"
        verbose_name_plural = "Payment QRs"
