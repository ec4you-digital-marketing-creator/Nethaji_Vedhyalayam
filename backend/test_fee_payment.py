
import requests
import json

url = 'http://127.0.0.1:8000/api/core/fee-payments/'

payload = {
    "student_name": "Test Student",
    "parent_name": "Test Parent",
    "phone_number": "1234567890",
    "grade": "1",
    "section": "A"
}

headers = {
    'Content-Type': 'application/json'
}

try:
    print(f"Sending POST request to {url}...")
    response = requests.post(url, json=payload, headers=headers)
    
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 201:
        print("SUCCESS: Fee payment created.")
    else:
        print("FAILURE: Could not create fee payment.")
        
except Exception as e:
    print(f"ERROR: {e}")
