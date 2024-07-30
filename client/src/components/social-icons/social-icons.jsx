import React from "react";

export default function SocialIcons({ socialIconList }) {
  return (
    <div className="footer-section">
      <h4>Follow Us</h4>
      <ul className="social-icons">
        {socialIconList.map((icon, index) => (
          <li key={index}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
