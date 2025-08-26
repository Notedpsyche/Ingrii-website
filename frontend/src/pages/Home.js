import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import camIcon from "../assets/Groupcamsss.png";
import fileIcon from "../assets/Groupfiless.png";
import containerImage from "../assets/Vectorupload.png";
import "../App.css";
import headerBg from "../assets/Vectorhead.png";
import tabBg from "../assets/Vectorgrey.png";
import searchBg from "../assets/Vectorsearcch.png";
import aiBox from "../assets/Vectorbox.png";
import aiChat from "../assets/Vectortype.png"
import aiChatBot from "../assets/Vectorchat.png"
import manualSearch from "../assets/Vectormanual.png"



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
    width:"calc(100% - 80px)", 
    margin:"20px auto",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border:"2px solid #1F1F22",  
    borderRadius:"30px",
    padding: "0 25px",
    boxSizing: "border-box",
    overflow:"hidden"
  }}
>
  {/* Left Logo */}
  <div style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" ,fontStyle:"italic", paddingBottom:"5px"}}>
    INGRII
  </div>

  {/* Tabs */}
  <nav style={{ display: "flex", gap: "20px",marginRight:"350px" }}>
    <div
      style={{
        backgroundImage: `url(${tabBg})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        border:"2px solid #1F1F22", 
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Home
    </div>
    <div
      style={{
        backgroundImage: `url(${tabBg})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        border:"2px solid #1F1F22", 
        borderRadius: "20px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Results
    </div>
    <div
      style={{
        backgroundImage: `url(${tabBg})`,
        backgroundSize: "cover",
        padding: "8px 16px",
        border:"2px solid #1F1F22", 
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
  placeholder="🔍 Search..."
  style={{
    backgroundColor: "transparent",       // remove default white
    backgroundImage: `url(${searchBg})`,   // use your imported asset
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    color: "#fff",                        // change text color if needed
    border: "none",
    padding: "55px 12px",
    paddingRight: "50px",                 // space for the icon
    borderRadius: "20px",
    outline: "none",
    width: "500px",
    height: "42px",                       // set a fixed height
    boxSizing: "border-box",
  }}
/>
</header>

    <div className="container"
      style={{
        backgroundImage: `url(${containerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border:"2px solid #1F1F22", 
        borderRadius: "20px",
        height:267,
      }} >
      
      <h1 style={{textAlign:"left", fontSize:25}}>
        Scan ingredients from a label <AiOutlineUpload size={28} />
      </h1>
      <p style={{textAlign:"left"}}>Upload through either file or camera</p>
       <input
        type="file"
        accept="image/*"
        id="file-upload"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
        <input
        type="text"
        placeholder="Type to manually search.."
        style={{
          position:"relative",
          backgroundColor: "transparent",       // remove default white
          backgroundImage: `url(${manualSearch})`,   // use your imported asset
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          color: "#fff",                        // change text color if needed
          border: "none",
          top:"-100px",
          left:"-180px",
          borderRadius: "20px",
          padding:"10px 16px",
          outline: "none",
          width: "400px",
          height: "42px",                       // set a fixed height
          boxSizing: "border-box",
          overflow:"hidden"
        }}
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
          <img src={camIcon} alt="Upload via cam" className="upload-icon" />
        </label>
        
        {loading && <p>⏳ Processing...</p>}
      </div>
      <div>
          <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={() => {}}
          />
          <label htmlFor="file-upload" className="upload-file-label">
              <img src={fileIcon} alt="Upload files" className="upload-icon" />
          </label>

      </div>
      
    </div>

    <div
      className="ai_container"
      style={{
        border:"2px solid #1F1F22", 
        borderRadius: "25px",
        backgroundImage: `url(${aiBox})`,
        backgroundSize: "cover",
        width: "250px",
        height:"470px",   // or use % or vw
        marginTop:"0px",
        position:"relative",
        top:"-410px",  // required to see the div
      }}
      >
        
        <div
          className="ai_chatBot"
          style={{
          border:"2px solid #1F1F22", 
          borderRadius: "10px",
          backgroundImage: `url(${aiChat})`,
          backgroundSize: "cover",
          width: "247px",
          height:"400px",   // or use % or vw
          marginTop:"0px",
          position:"relative",
          top:"80px",  // required to see the div
          }}>
            <textarea
              placeholder="Get your doubts cleared!"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                outline: "none",
                width: "100%",         // matches parent width
                height: "100px",       // or adjust as needed
                boxSizing: "border-box",
                resize: "none",        // prevents dragging to resize
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "pre-wrap" // allows newlines and wrapping
              }}
            />
      </div>
        <div
          className="ai_chat"
          style={{
          border:"2px solid #1F1F22", 
          borderRadius: "10px",
          backgroundImage: `url(${aiChatBot})`,
          backgroundSize: "cover",
          width: "247px",
          height:"70px",   // or use % or vw
          marginTop:"0px",
          position:"relative",
          top:"-417px",
          left:"0px"  // required to see the div
        }}>
          <span style={{position:"relative", top:"7px",fontWeight:  "bold" }}><p>AI CHATBOT</p></span>
        </div>
      </div>
    </>
  );
}

export default Home;
