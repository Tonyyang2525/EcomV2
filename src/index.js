import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Carousel from "./components/home-slider/carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const nav = ReactDOM.createRoot(document.getElementById("nav"));
nav.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const imageSlider = ReactDOM.createRoot(document.getElementById("imageSlider"));
imageSlider.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>
);
