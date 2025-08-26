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

      // ✅ Save to recent searches
      if (data.matched && data.matched.length > 0) {
        let recent = JSON.parse(localStorage.getItem("recentSearches")) || [];
        recent.unshift({
          e_code: data.matched[0].e_code,
          title: data.matched[0].title,
          halal_status: data.matched[0].halal_status,
          timestamp: new Date().toLocaleString(),
        });
        // keep only latest 10
        recent = recent.slice(0, 10);
        localStorage.setItem("recentSearches", JSON.stringify(recent));
      }

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
        Welcome to INGRII <AiOutlineUpload size={28} />
      </h1>
<<<<<<< HEAD
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
=======
      <p>Upload an image and let INGRII analyze it for you.</p>
      <input type="file" accept="image/*" onChange={handleUpload} />
>>>>>>> bff960f (added chatbot)
      {loading && <p className="loading">⏳ Processing...</p>}
    </div>
  );
}

export default Home;
