import os
import sys

# Add the project directory to the sys.path
sys.path.append(os.getcwd())

from backend.wsgi import application
