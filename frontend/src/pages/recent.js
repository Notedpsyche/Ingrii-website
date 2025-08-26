// pages/Recent.js
import React, { useEffect, useState } from "react";

function Recent() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecent(stored);
  }, []);

  return (
    <div className="recent-container">
      <h2>Recent Searches</h2>
      {recent.length === 0 ? (
        <p>No recent searches yet.</p>
      ) : (
        <ul>
          {recent.map((item, index) => (
            <li key={index}>
              <strong>{item.e_code}</strong> – {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recent;
