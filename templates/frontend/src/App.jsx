import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  const [vibration, setVibration] = useState("");
  const [pressure, setPressure] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          temp: parseFloat(temp),
          vibration: parseFloat(vibration),
          pressure: parseFloat(pressure),
        }),
      });

      const data = await response.json();
      setResult(
        data.failure_predicted
          ? "⚠️ Machine Failure Predicted"
          : "✅ Machine Operating Normally"
      );
    } catch (error) {
      console.error("Error:", error);
      setResult("❌ Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Machine Failure Predictor</h1>
      <form style={styles.form} onSubmit={handlePredict}>
        <label>Temperature (°C)</label>
        <input
          type="number"
          step="any"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          required
        />

        <label>Vibration Level</label>
        <input
          type="number"
          step="any"
          value={vibration}
          onChange={(e) => setVibration(e.target.value)}
          required
        />

        <label>Pressure (bar)</label>
        <input
          type="number"
          step="any"
          value={pressure}
          onChange={(e) => setPressure(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {result && <h2 style={styles.result}>{result}</h2>}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    background: "#f5f7fa",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: { marginBottom: "20px", color: "#333" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "10px",
    background: "#e8f0fe",
  },
};

export default App;
