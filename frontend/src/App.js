import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <Router>
      <header>  
        INGRII
      </header>
      <Routes>
        <Route path="/" element={<Home setImage={setImage} setResult={setResult} />} />
        <Route path="/result" element={<Result image={image} result={result} />} />
      </Routes>
    </Router>
  );
}

export default App;
