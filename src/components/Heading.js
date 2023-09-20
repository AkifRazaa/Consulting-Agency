import React from "react";
import { Link } from "react-router-dom";

function Heading({ title, breadcrumbs }) {
  const topHeadingStyle = {
    backgroundColor: "#f0efea",
    transition: "background-color 0.3s ease",
    padding: "70px",
    fontSize: "large",
  };

  return (
    <section id="topHeading" style={topHeadingStyle} className="text-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={index}
              className={`breadcrumb-item text-dark small ${
                index === breadcrumbs.length - 1 ? "font-weight-bold" : ""
              }`}
            >
              {breadcrumb.link ? (
                <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
              ) : (
                breadcrumb.text
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1>{title}</h1>
    </section>
  );
}

export default Heading;
