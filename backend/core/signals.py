import os
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.base import ContentFile
import sys

def compress_image(image_field):
    """
    Helper function to compress and resize images.
    """
    img = Image.open(image_field)
    
    # Convert RGBA to RGB if necessary (to save as JPEG)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    
    # Resize to max width of 1920px while maintaining aspect ratio
    max_width = 1920
    if img.width > max_width:
        output_size = (max_width, int((max_width / img.width) * img.height))
        img = img.resize(output_size, Image.Resampling.LANCZOS)
    
    output = BytesIO()
    # Save with 70% quality
    img.save(output, format='JPEG', quality=70, optimize=True)
    output.seek(0)
    
    return ContentFile(output.read(), name=os.path.basename(image_field.name))

@receiver(pre_save)
def auto_compress_images(sender, instance, **kwargs):
    """
    Generic signal to catch all models and compress any ImageField being saved.
    """
    # Get all ImageFields for this model
    image_fields = [f for f in sender._meta.fields if isinstance(f, models.ImageField)]
    
    for field in image_fields:
        file = getattr(instance, field.name)
        
        if not file:
            continue
            
        try:
            # Check if this is a new file or has been changed
            try:
                # If instance already exists in DB
                old_instance = sender.objects.get(pk=instance.pk)
                old_file = getattr(old_instance, field.name)
                # If file has changed, compress it
                if old_file != file:
                    compressed_file = compress_image(file)
                    setattr(instance, field.name, compressed_file)
            except sender.DoesNotExist:
                # If instance is new, it will not exist in DB yet
                compressed_file = compress_image(file)
                setattr(instance, field.name, compressed_file)
        except Exception as e:
            # Fallback for complex models or if Pillow fails
            print(f"Error compressing image for {sender.__name__}.{field.name}: {e}")
            continue
