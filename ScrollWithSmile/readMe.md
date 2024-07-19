## Installation

You need to install below libraries:

```bash
pip install opencv-python pyautogui
```

## Imporatnt

for use these perfectly you need to stay 50cm away from camera

# If not working

You need to smile bigger and teeths should be visible when you are smilling

Settings to be changed ...

```Python
smiles = smile_cascade.detectMultiScale(roi_gray, scaleFactor=1.8, minNeighbors=20, minSize=(25, 25))
```

(Change these values , if you are more than 50cm away from camera you need to decrease the values and vice versa)

## What we are integrated...

# OpenCV (cv2):

OpenCV is an open-source computer vision and machine learning software library. It provides various functions for image processing and video analysis.

In this script, OpenCV is used to capture video frames from the webcam, convert them to grayscale, and detect faces and smiles using pre-trained Haar cascades.

# PyAutoGUI:

PyAutoGUI is a cross-platform GUI automation Python module for human beings. It can simulate mouse movements, clicks, and keyboard presses.
In this script, PyAutoGUI is used to scroll the screen when a smile is detected.
