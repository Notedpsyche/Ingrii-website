import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import camIcon from "../assets/Vectorcamera.png";
import containerImage from "../assets/Vectorupload.png";
import "../App.css";
import headerBg from "../assets/Vectorhead.png";
import tabBg from "../assets/Vectorgrey.png";




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
    <>
    <header
  style={{
    backgroundImage: `url(${headerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    boxSizing: "border-box",
  }}
>
  {/* Left Logo */}
  <div style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
    INGRII
  </div>

  {/* Tabs */}
  <nav style={{ display: "flex", gap: "20px" }}>
    <div
      style={{
        backgroundImage: `url(${require(tabBg)})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Home
    </div>
    <div
      style={{
        backgroundImage: `url(${require(tabBg)})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Results
    </div>
    <div
      style={{
        backgroundImage: `url(${require(tabBg)})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Profile
    </div>
  </nav>

  {/* Search */}
  <input
    type="text"
    placeholder="Search..."
    style={{
      border: "none",
      padding: "6px 12px",
      borderRadius: "20px",
      outline: "none",
      width: "200px",
    }}
  />
</header>

    <div className="container"
      style={{
        backgroundImage: `url(${containerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
      
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
        <div className="upload-wrapper">
        {/* Hidden file input */}
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={() => {}}
        />

        {/* Label acts like a button */}
        <label htmlFor="file-upload" className="upload-label">
          <img src={camIcon} alt="Upload" className="upload-icon" />
          <span className="emoji">📷</span>
        </label>

        {loading && <p>⏳ Processing...</p>}
      </div>

    </div>
    </>
  );
}

export default Home;
