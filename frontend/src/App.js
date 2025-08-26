import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Recent from "./pages/recent";
import Chatbot from "./pages/chatbot";   // ✅ import your chatbot
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <Router>
      <header className="app-header">
        <h1>INGRII</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/recent">Recent Searches</Link>
          <Link to="/chat">Chat</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home setImage={setImage} setResult={setResult} />} />
        <Route path="/result" element={<Result image={image} result={result} />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/chat" element={<Chatbot />} />   {/* ✅ This loads the chat page */}
      </Routes>
    </Router>
  );
}

export default App;
