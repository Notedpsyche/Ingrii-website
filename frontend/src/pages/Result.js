import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import "../App.css";

function Result({ image, result }) {
  const highlightText = () => {
    if (!result || !result.matched || result.matched.length === 0) return result?.extracted || "";

    let highlighted = result.extracted;
    const codes = result.matched.map(item => item.e_code).sort((a, b) => b.length - a.length);

    codes.forEach(code => {
      const regex = new RegExp(`(${code})`, "g");
      highlighted = highlighted.replace(regex, `<span class="highlight">$1</span>`);
    });

    return highlighted;
  };

  return (
    <div className="container">
      <div className="top-bar">
        <Link to="/" className="home-button">
          <AiOutlineHome size={24} /> Home
        </Link>
      </div>

      <h1>Ingrii Results</h1>

      {image && <img src={image} alt="Uploaded" className="uploaded-image" />}

      {result ? (
        <>
          <div className="result-box" dangerouslySetInnerHTML={{ __html: highlightText() }} />

          {result.matched.length > 0 ? (
            result.matched.map((item, index) => (
              <div className="result-box card" key={index}>
                <h3><AiOutlineInfoCircle /> {item.title}</h3>
                <p><strong>E-Code:</strong> {item.e_code}</p>
                <p><strong>Info:</strong> {item.info}</p>
                <p><strong>Type:</strong> {item.e_type}</p>
                <p><strong>Halal Status:</strong> {item.halal_status}</p>
                <p><strong>Risk Factor:</strong> {item.risk_factor}</p>
                <p><strong>Countries Banned:</strong> {item.countries_banned}</p>
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
  );
}

export default Result;
