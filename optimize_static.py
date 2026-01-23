import os
from PIL import Image

def optimize_image(image_path, max_size=(1000, 1000), quality=85):
    try:
        if not os.path.exists(image_path):
            print(f"File not found: {image_path}")
            return False
            
        img = Image.open(image_path)
        original_size = os.path.getsize(image_path)
        
        # Resize if significantly larger than max_size
        if img.width > max_size[0] or img.height > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Determine format based on extension
        ext = os.path.splitext(image_path)[1].lower()
        if ext in ['.jpg', '.jpeg']:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            img.save(image_path, "JPEG", optimize=True, quality=quality)
        elif ext == '.png':
            img.save(image_path, "PNG", optimize=True)
        else:
            # Fallback for others
            img.save(image_path, optimize=True)
            
        new_size = os.path.getsize(image_path)
        
        print(f"Optimized: {os.path.basename(image_path)}")
        print(f"  {original_size/1024/1024:.2f} MB -> {new_size/1024:.2f} KB")
        return True
    except Exception as e:
        print(f"Error optimizing {image_path}: {e}")
        return False

def optimize_directory(directory_path, max_size=(1000, 1000), quality=85):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                optimize_image(file_path, max_size, quality)

# List of specific files to optimize
files_to_optimize = [
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\Correspontent.jpg",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\Secretry.jpg",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\princi.jpg",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\Home\about2.JPG",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\Home\about3.JPG",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\About\DSC07101.JPG",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images\About\about1.JPG"
]

# Directories to scan recursively
directories_to_optimize = [
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\backend\media",
    r"d:\vijaykumar\Nethaji Vidyalayam\update - V2\Nethaji_Vedhyalayam-main\frontend\src\images"
]


if __name__ == "__main__":
    # Optimize specific files
    for file_path in files_to_optimize:
        optimize_image(file_path)
    
    # Optimize directories
    for dir_path in directories_to_optimize:
        if os.path.exists(dir_path):
            optimize_directory(dir_path)
        else:
            print(f"Directory not found: {dir_path}")

