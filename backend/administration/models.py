from django.db import models

class Student(models.Model):
    # Basic Info
    name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=20, unique=True)
    # Class Info
    class_name = models.CharField(max_length=10) # e.g., "10"
    section = models.CharField(max_length=5) # e.g., "A"
    # Parent Info
    parent_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.student_id})"

class Enquiry(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Resolved', 'Resolved'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"{self.name} - {self.status}"

class CareerApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    applied_date = models.DateField(auto_now_add=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.position}"
