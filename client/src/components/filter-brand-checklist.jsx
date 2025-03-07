import React from "react";
import { Checkbox } from "antd";

export default function FilterBrandCheckList({ checkedList, setCheckedList }) {
  const onChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  };

  return (
    <>
      <h3>Brands</h3>
      <div className="filter">
        <Checkbox onChange={onChange} value="berkley">
          Berkley
        </Checkbox>
        <Checkbox onChange={onChange} value="strike king kvd">
          Strike King KVD
        </Checkbox>
        <Checkbox onChange={onChange} value="river2sea">
          River2Sea
        </Checkbox>
        <Checkbox onChange={onChange} value="savage gear">
          Savage Gear
        </Checkbox>
        <Checkbox onChange={onChange} value="tournament series">
          Tournament Series
        </Checkbox>
        <Checkbox onChange={onChange} value="xps">
          Xps
        </Checkbox>
        <Checkbox onChange={onChange} value="yamoto">
          Yamoto
        </Checkbox>
        <Checkbox onChange={onChange} value="zoom">
          Zoom
        </Checkbox>
        <Checkbox onChange={onChange} value="z-man">
          Z-man
        </Checkbox>
      </div>
    </>
  );
}
