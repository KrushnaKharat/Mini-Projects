import cv2
import pyautogui
import time

# Load the pre-trained models
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
smile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_smile.xml')

# Initialize variables to keep track of smile status and scrolling
smile_detected = False
smile_area_threshold = 1500  # Adjust this value based on your requirements
last_scroll_time = time.time()
scroll_pause_duration = 2  # Pause duration in seconds

# Capture video from the webcam
cap = cv2.VideoCapture(0)

while True:
    # For capturing frames
    ret, frame = cap.read()
    if not ret:
        break

    # Convert to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    for (x, y, w, h) in faces:
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = frame[y:y+h, x:x+w]

        # Detecting smiles in face region
        smiles = smile_cascade.detectMultiScale(roi_gray, scaleFactor=1.8, minNeighbors=20, minSize=(25, 25))
        if len(smiles) > 0:
            for (sx, sy, sw, sh) in smiles:
                smile_area = sw * sh
                if smile_area > smile_area_threshold:
                    smile_detected = True
                    break
        else:
            smile_detected = False

    # scrolling when smile is true
    current_time = time.time()
    if smile_detected and (current_time - last_scroll_time) > scroll_pause_duration:
        pyautogui.scroll(-100)  # Adjust scroll amount as needed
        last_scroll_time = current_time  # Update the last scroll time

    
    cv2.imshow('frame', frame)

    # Press 'q' for quit the program
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()
