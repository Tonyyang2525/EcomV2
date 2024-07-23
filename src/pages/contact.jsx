import React from "react";

export default function contact() {
  return (
    <div className="containerForm">
      <h2 style={{ color: "black;" }}>Contact US</h2>
      <form action="action_page.php" />

      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="lname">Email</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your Email.."
      />

      <label for="phone">Enter your phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      />

      <label for="subject" style={{ display: "flex", margintop: "1em" }}>
        Subject
      </label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Enter Text here..."
        style={{ height: "200px" }}
      ></textarea>

      <input type="submit" value="Submit" />

      <form />
    </div>
  );
}
