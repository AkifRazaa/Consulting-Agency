import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function SendMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setIsFormValid(false);
      return;
    }

    setFormData({ name: "", email: "", message: "" });
    setIsFormValid(true);
    alert("Message sent successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
          required
        />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
          required
        />
        <textarea
          id="form4Example3"
          className="form-control mb-4"
          rows={4}
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
          required
        ></textarea>

        {!isFormValid && (
          <p style={{ color: "red" }}>All fields are required!</p>
        )}

        <MDBBtn
          type="submit"
          className="mb-4"
          block
          style={{ backgroundColor: "#3498db", color: "#fff" }}
        >
          Send Message
        </MDBBtn>
      </form>
    </div>
  );
}

export default SendMessage;
