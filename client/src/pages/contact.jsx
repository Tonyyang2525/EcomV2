import React, { useState } from "react";
import "../components/css/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event) => {
    // do not reload the page when submitting
    event.preventDefault();
    validateEmail();
    // Add further form submission logic here if needed
  };

  return (
    <div className="containerForm">
      <div className="form-container" style={{ width: "100%" }}>
        <h2 style={{ color: "black" }}>Contact US</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email.."
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}

          <label
            htmlFor="subject"
            style={{ display: "flex", marginTop: "1em" }}
          >
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Enter Text here..."
            style={{ height: "200px" }}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "black" }}
          />
        </form>
      </div>
    </div>
  );
}
