import React from "react";

function FeaturesInfo({ icon, title, text }) {
  const iconStyle = {
    fontSize: "30px",
    marginBottom: "10px",
  };

  const textStyle = {
    color: "#808080",
  };

  return (
    <div className="mb-4">
      <div style={iconStyle}>{icon}</div>
      <div>
        {" "}
        <h4> {title} </h4>{" "}
      </div>

      <div style={textStyle}> {text} </div>
    </div>
  );
}

export default FeaturesInfo;
