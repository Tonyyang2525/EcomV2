import React from "react";
import Carousel from "../components/home-slider/carousel";
import "../components/css/home.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Welcome to the Dynamic Fishing</h1>
          <Link to="/products">
            <Button type="primary" style={{ backgroundColor: "black" }}>
              SHOP NOW
            </Button>
          </Link>
        </div>
        <img src="./img/fishing-hero.jpeg" alt="Logo" className="hero-logo" />
      </div>
      <Carousel />
      <div className="exclusive-deal">
        <h2>CHECKOUT OUR EXCLUSIVE CLUB MEMBER DEALS HERE</h2>
        <Button type="primary" style={{ backgroundColor: "black" }}>
          CLICK HERE
        </Button>
      </div>
    </div>
  );
}
