import React from "react";
import Carousel from "../components/home-slider/carousel";
import "../components/css/home.css";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome to the Dynamic Fishing</h1>
        <Button type="primary" style={{ backgroundColor: "black" }}>
          SHOP NOW
        </Button>
      </div>
      <img src="./img/fishing-hero.jpeg" alt="Logo" className="hero-logo" />
      <Carousel />
    </div>
  );
}
