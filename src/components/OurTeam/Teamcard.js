import React from "react";

function Teamcard({ image, name, role }) {
  const cardStyle = {
    whiteSpace: "nowrap", // Prevent text from wrapping
  };

  return (
    <div style={cardStyle}>
      <img
        src={image}
        alt="Team Member"
        style={{ width: "300px", height: "400px" }}
      />
      <h6 className="mt-4">{name}</h6>
      <p>{role}</p>
    </div>
  );
}

export default Teamcard;
