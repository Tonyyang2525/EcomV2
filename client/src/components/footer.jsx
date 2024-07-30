import React from "react";
import "./css/footer.css";
import SocialIcons from "./social-icons/social-icons";

import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const socialIconList = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: <FacebookOutlined />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <TwitterOutlined />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramOutlined />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedinOutlined />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a team of passionate Fishermen dedicated to providing an
            amazing fishing experiences through our products. We are here to
            help.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <SocialIcons socialIconList={socialIconList} />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dynamic Fishing. All rights reserved.</p>
      </div>
    </footer>
  );
}
