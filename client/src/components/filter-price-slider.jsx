import React from "react";
import { Slider } from "antd";

export default function FilterPriceSlider({ setMin, setMax, min, max }) {
  return (
    <div style={{ width: "20%" }}>
      <Slider
        range
        max={30}
        defaultValue={[min, max]}
        onChangeComplete={([min, max]) => [setMin(min), setMax(max)]}
      />
      <span>
        Min: ${min} - Max: ${max}
      </span>
    </div>
  );
}
