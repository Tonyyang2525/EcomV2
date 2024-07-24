import React from "react";
import { Carousel } from "antd";
//images for carousel
// import ManHoldingFish from "../../images/ManHoldingFish.jpeg";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#31363F",
};
const App = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>USE CODE "DF10" TO GET 10% OFF!</h3>
      </div>
      <div>
        <h3 style={contentStyle}>CHECKOUT OUR SUMMER SALE!</h3>
      </div>
      <div>
        <h3 style={contentStyle}>BUY 1 GET 1 FREE</h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          JOIN OUR REWARDS PROGRAM AND GET 15% OFF YOUR NEXT ORDER
        </h3>
      </div>
    </Carousel>
    <br />
  </>
);
export default App;
