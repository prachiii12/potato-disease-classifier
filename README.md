Potato Disease Classifier

An end-to-end AI-powered web application that detects potato leaf diseases using deep learning.


 Features

* Upload potato leaf image
* Detect disease (Early Blight, Late Blight, Healthy)
* Confidence score prediction
* Modern interactive UI
* Real-time API integration

 Tech Stack

* **Backend:** FastAPI
* **Frontend:** React
* **ML Model:** TensorFlow / Keras
* **Deployment:** (Add later – Render / Netlify)


### 🔹 Backend

```bash
cd api_
uvicorn main:app --reload
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📂 Project Structure

```
Potato_Disease/
 ├── api_/              # FastAPI backend
 ├── frontend/          # React frontend
 ├── saved_models/      # ML models (not uploaded)
 ├── training.ipynb     # Model training
```

---

## 🧠 Model

* Trained using CNN
* Input size: 224x224 images
* Classes:

  * Early Blight
  * Late Blight
  * Healthy

---

## 🌟 Future Improvements

* Mobile responsive UI
* Cloud deployment
* Model optimization
* Disease explanation feature

---


Prachi Mishra
