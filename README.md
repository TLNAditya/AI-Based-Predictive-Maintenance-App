# AI-Based-Predictive-Maintenance-App

## 🚀 Overview

This project predicts machine failure in real-time using an AI model trained on synthetic sensor data.
It demonstrates the full MLOps lifecycle — from model training to deployment on Azure using Docker and CI/CD pipelines (GitHub Actions).

## 🧩 Tech Stack

| Category        | Tools / Technologies                      |
| --------------- | ----------------------------------------- |
| Programming     | Python, JavaScript (React)                |
| Backend         | Flask (REST API)                          |
| Frontend        | React (Vite / CRA UI)                     |
| AI/ML           | scikit-learn, pandas, numpy               |
| DevOps          | Docker, GitHub Actions, Azure App Service |
| Deployment      | Azure App Service (Linux, Python 3.10)    |
| Version Control | Git & GitHub                              |

## ⚙️ Features

✅ Train and save an ML model (RandomForestClassifier) to predict equipment failure
✅ REST API built with Flask for real-time predictions
✅ React-based web UI for user input and predictions
✅ Containerized using Docker for easy portability
✅ CI/CD pipeline with GitHub Actions for automated deployment to Azure
✅ Demonstrates end-to-end MLOps and cloud automation

## 🧠 AI Model

The model is trained on synthetic sensor data with features:

Temperature (°C)

Vibration (amplitude)

Pressure (bar)

Failure (binary label)

Model: RandomForestClassifier
Framework: scikit-learn

## 🧪 Sample Inputs & Predictions

| Temperature | Vibration | Pressure | Prediction                    |
| ----------- | --------- | -------- | ----------------------------- |
| 72          | 0.45      | 33       | ✅ Machine Operating Normally |
| 90          | 0.85      | 22       | ⚠️ Machine Failure Predicted  |

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/TLNAditya/AI-Based-Predictive-Maintenance-App.git
```

### 2️⃣ Install Python Dependencies

```
pip install -r requirements.txt
```

### 3️⃣ Run Flask App

```
python app.py
```

Flask will start at 👉 `http://127.0.0.1:5000`

### 4️⃣ Run React Frontend

-> Open another terminal

```
cd frontend
npm install
npm start
```

React will start at 👉 `http://localhost:3000`

## 💡 Learning Highlights

Hands-on MLOps project covering AI → Cloud → DevOps pipeline

Integration of Flask REST API with React frontend

Docker containerization and Azure deployment

Showcases real-world industrial AI use case aligned with AVEVA’s digital transformation & sustainability goals

## 👨‍💻 Author

T.L.N. Aditya
📧 myselftlnaditya@gmail.com

💼 Aspiring Cloud DevOps Engineer | AI & ML Enthusiast
