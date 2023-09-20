import React from "react";
import "./WhyChooseUs.css";

function Detail({ icon, title, text }) {


  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
      <div className="iconStyle">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p style={{color: "#808080"}}>{text}</p>
      </div>
    </div>
  );
}

export default Detail;
