import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineUpload } from "react-icons/ai";
import React, { useState } from "react";
import "../App.css";

import camIcon from "../assets/Groupcamsss.png";
import fileIcon from "../assets/Groupfiless.png";
import containerImage from "../assets/Vectorupload.png";
import headerBg from "../assets/Vectorhead.png";
import tabBg from "../assets/Vectorgrey.png";
import tabBgHighlight from "../assets/Vectorred.png"; // highlighted tab image
import searchBg from "../assets/Vectorsearcch.png";
import aiBox from "../assets/Vectorbox.png";
import aiChat from "../assets/Vectortype.png";
import aiChatBot from "../assets/Vectorchat.png";
import manualSearch from "../assets/Vectormanual.png";

function Result({ image, result }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(1); // <-- Default is Results tab (index 1)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Results", path: "/result" },
    { name: "Profile", path: "/profile" },
  ];

  const highlightText = () => {
    if (!result || !result.matched || result.matched.length === 0)
      return result?.extracted || "";

    let highlighted = result.extracted;
    const codes = result.matched
      .map((item) => item.e_code)
      .sort((a, b) => b.length - a.length);

    codes.forEach((code) => {
      const regex = new RegExp(`(${code})`, "g");
      highlighted = highlighted.replace(regex, `<span class="highlight">$1</span>`);
    });

    return highlighted;
  };

  return (
    <>
      {/* Fixed Header */}
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
          position: "fixed", // <-- Fixed at top
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Left Logo */}
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

        {/* Tabs */}
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

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search..."
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

      {/* Scrollable Body */}
      <div
        style={{
          marginTop: "110px", // leave space for fixed header
          padding: "20px",
          overflowY: "auto",
          height: "calc(100vh - 110px)", // full height minus header
          paddingBottom: "60px", // <-- extra footer space
        }}
      >
        {/* Flex container for Results + Chatbot */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          {/* Results Section */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontStyle: "Italic" }}>Results</h1>
            {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
            {result ? (
              <>
                <div
                  className="result-box"
                  dangerouslySetInnerHTML={{ __html: highlightText() }}
                />
                {result.matched.length > 0 ? (
                  result.matched.map((item, index) => (
                    <div className="result-box card" key={index}>
                      <h3>
                        <AiOutlineInfoCircle /> {item.title}
                      </h3>
                      <p>
                        <strong>E-Code:</strong> {item.e_code}
                      </p>
                      <p>
                        <strong>Info:</strong> {item.info}
                      </p>
                      <p>
                        <strong>Type:</strong> {item.e_type}
                      </p>
                      <p>
                        <strong>Halal Status:</strong> {item.halal_status}
                      </p>
                      <p>
                        <strong>Risk Factor:</strong> {item.risk_factor}
                      </p>
                      <p>
                        <strong>Countries Banned:</strong> {item.countries_banned}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="result-box">❌ No match found</p>
                )}
              </>
            ) : (
              <p className="result-box">⚠ No result available</p>
            )}
          </div>

          {/* AI Chatbot Section */}
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
              flexShrink: 0,
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
        </div>
        <div style={{ height: "80px" }}></div>
      </div>
      
    </>
  );
}

export default Result;
