import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const MOBILE_MAX_WIDTH = 767;
const MOBILE_PADDING = "10px 13px";
const DESKTOP_PADDING = "10px 30px";

function Button({
  text,
  backgroundColor,
  hoverColor,
  marginRight = 0,
  marginLeft = 0,
  onClick,
}) {
  const isMobileView = window.innerWidth <= MOBILE_MAX_WIDTH;
  const defaultPadding = isMobileView ? MOBILE_PADDING : DESKTOP_PADDING;

  const buttonStyle = {
    border: "1px solid black",
    backgroundColor,
    borderRadius: "20px",
    fontWeight: "bold",
    padding: defaultPadding,
    transition: "background-color 0.3s ease",
    marginRight: `${marginRight}px`,
    marginLeft: `${marginLeft}px`,
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = backgroundColor;
  };

  const handleClick = () => {
    // Call the onClick prop from the parent component, if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className="btn "
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text} <LuArrowUpRight />
    </button>
  );
}

export default Button;
