from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np


app = Flask(__name__)
CORS(app)
model = joblib.load("artifacts/model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array([[data["temp"], data["vibration"], data["pressure"]]])
    pred = int(model.predict(features)[0])
    return jsonify({"failure_predicted": bool(pred)})

if __name__ == "__main__":
    app.run(debug=True)
