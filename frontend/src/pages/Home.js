import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import camIcon from "../assets/Groupcamsss.png";
import fileIcon from "../assets/Groupfiless.png";
import containerImage from "../assets/Vectorupload.png";
import "../App.css";
import headerBg from "../assets/Vectorhead.png";
import tabBg from "../assets/Vectorgrey.png";
import tabBgHighlight from "../assets/Vectorred.png";
import searchBg from "../assets/Vectorsearcch.png";
import aiBox from "../assets/Vectorbox.png";
import aiChat from "../assets/Vectortype.png";
import aiChatBot from "../assets/Vectorchat.png";
import manualSearch from "../assets/Vectormanual.png";

function Home({ setImage, setResult }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  // NEW: local state for both search inputs
  const [headerSearch, setHeaderSearch] = useState("");
  const [manualSearchQuery, setManualSearchQuery] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Results", path: "/result" },
    { name: "Profile", path: "/profile" },
  ];

  // Sync active tab with the current URL
  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveTab(currentIndex);
    }
  }, [location.pathname]);

  // Upload handler (used by both camera + file)
  const handleUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setLoading(true);
    setImage(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch("http://172.16.98.73:5000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
      navigate("/result", { state: { image: URL.createObjectURL(file), result: data } });
    } catch (err) {
      console.error(err);
      setResult({ success: false, extracted: "", matched: [] });
      navigate("/result", {
        state: {
          image: URL.createObjectURL(file),
          result: { success: false, extracted: "", matched: [] },
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // Search submit (used by header search + manual search)
  const submitSearch = async (query) => {
    const q = (query || "").trim();
    if (!q) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      setResult(data);
      navigate("/result", { state: { image: null, result: data } });
    } catch (err) {
      console.error(err);
      const fallback = { success: false, extracted: q, matched: [] };
      setResult(fallback);
      navigate("/result", { state: { image: null, result: fallback } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fixed full-screen loading overlay (inline styles so it won't affect layout) */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "rgba(32,32,36,0.9)",
              padding: "16px 20px",
              borderRadius: "12px",
              border: "2px solid #1F1F22",
              color: "#fff",
              fontWeight: "bold",
              letterSpacing: "0.3px",
            }}
          >
            ⏳ Processing...
          </div>
        </div>
      )}

      <header
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "calc(100% - 80px)",
          margin: "20px auto",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid #1F1F22",
          borderRadius: "30px",
          padding: "0 25px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            fontStyle: "italic",
            paddingBottom: "5px",
          }}
        >
          INGRII
        </div>

        <nav style={{ display: "flex", gap: "20px", marginRight: "350px" }}>
          {navItems.map((item, index) => {
            const isActive = activeTab === index;
            const isHovered = hovered === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  navigate(item.path);
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundImage: `url(${isActive || isHovered ? tabBgHighlight : tabBg})`,
                  backgroundSize: "cover",
                  padding: "8px 16px",
                  border: "2px solid #1F1F22",
                  borderRadius: "20px",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              >
                {item.name}
              </div>
            );
          })}
        </nav>

        {/* Header search wired to backend on Enter */}
        <input
          type="text"
          placeholder="🔍 Search..."
          value={headerSearch}
          onChange={(e) => setHeaderSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitSearch(headerSearch)}
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url(${searchBg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            color: "#fff",
            border: "none",
            padding: "55px 12px",
            paddingRight: "50px",
            borderRadius: "20px",
            outline: "none",
            width: "500px",
            height: "42px",
            boxSizing: "border-box",
          }}
        />
      </header>

      <div
        className="container" 
        style={{
          backgroundImage: `url(${containerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "2px solid #1F1F22",
          borderRadius: "20px",
          height: 267,
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: 25 }}>
          Scan ingredients from a label <AiOutlineUpload size={28} />
        </h1>
        <p style={{ textAlign: "left" }}>Upload through either file or camera</p>

        {/* Hidden file input (kept) */}
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          style={{ display: "none" }}
          onChange={handleUpload}
        />

        {/* Manual search input wired to backend on Enter */}
        <input
          type="text"
          placeholder="Type to manually search.."
          value={manualSearchQuery}
          onChange={(e) => setManualSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitSearch(manualSearchQuery)}
          style={{
            position: "relative",
            backgroundColor: "transparent",
            backgroundImage: `url(${manualSearch})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            border: "none",
            top: "-100px",
            left: "-180px",
            borderRadius: "20px",
            padding: "10px 16px",
            outline: "none",
            width: "400px",
            height: "42px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        />

        {/* Camera Upload Button (uses device camera on mobile) */}
        <div className="upload-wrapper">
          <input
            type="file"
            id="file-upload-cam"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          <label htmlFor="file-upload-cam" className="upload-label">
            <img src={camIcon} alt="Upload via cam" className="upload-icon" />
          </label>
        </div>

        {/* File Upload Button */}
        <div>
          <input
            type="file"
            id="file-upload-file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          <label htmlFor="file-upload-file" className="upload-file-label">
            <img src={fileIcon} alt="Upload files" className="upload-icon" />
          </label>
        </div>
      </div>

      <div
        className="ai_container"
        style={{
          border: "2px solid #1F1F22",
          borderRadius: "25px",
          backgroundImage: `url(${aiBox})`,
          backgroundSize: "cover",
          width: "250px",
          height: "470px",
          marginTop: "0px",
          position: "relative",
          top: "-450px",
        }}
      >
        <div
          className="ai_chatBot"
          style={{
            border: "2px solid #1F1F22",
            borderRadius: "10px",
            backgroundImage: `url(${aiChat})`,
            backgroundSize: "cover",
            width: "247px",
            height: "400px",
            marginTop: "0px",
            position: "relative",
            top: "80px",
          }}
        >
          <textarea
            placeholder="Get your doubts cleared!"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "10px",
              outline: "none",
              width: "100%",
              height: "100px",
              boxSizing: "border-box",
              resize: "none",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          />
        </div>
        <div
          className="ai_chat"
          style={{
            border: "2px solid #1F1F22",
            borderRadius: "10px",
            backgroundImage: `url(${aiChatBot})`,
            backgroundSize: "cover",
            width: "247px",
            height: "70px",
            marginTop: "0px",
            position: "relative",
            top: "-417px",
            left: "0px",
          }}
        >
          <span
            style={{
              position: "relative",
              top: "7px",
              fontWeight: "bold",
            }}
          >
            <p>AI CHATBOT</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
