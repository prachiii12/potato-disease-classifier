import React, { useState } from "react";
import "./App.css";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const selected = acceptedFiles[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!file) return alert("Upload an image!");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch {
      alert("Backend error");
    }

    setLoading(false);
  };

  return (
    <div className="app">

      {/* Floating blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>🌿 AI Plant Doctor</h1>
        <p className="subtitle">Smart Disease Detection</p>

        {/* Drag & Drop */}
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag & drop leaf image or click</p>
        </div>

        {preview && (
          <motion.img 
            src={preview} 
            alt="preview"
            className="preview"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}

        <button onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <motion.div 
            className="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>{result.class}</h2>

            <div className="progress">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${result.confidence * 100}%` }}
              ></motion.div>
            </div>

            <p>{(result.confidence * 100).toFixed(2)}%</p>
            <small>{result.model_used}</small>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;