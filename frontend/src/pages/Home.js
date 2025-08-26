import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";

import "../App.css";

function Home({ setImage, setResult }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
      navigate("/result");
    } catch (err) {
      console.error(err);
      setResult({ success: false, extracted: "", matched: [] });
      navigate("/result");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>
        Welcome to Ingrii <AiOutlineUpload size={28} />
      </h1>
      <p>Upload an image and let Ingrii analyze it for you.</p>
       <input
        type="file"
        accept="image/*"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      {/* Custom image button */}
      <label htmlFor="file-upload">
        <img
          src={uploadIcon}
          alt="Upload"
          style={{ width: "50px", cursor: "pointer" }}
        />
      </label>
      {loading && <p className="loading">⏳ Processing...</p>}
    </div>
  );
}

export default Home;
