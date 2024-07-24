import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "../components/css/products.css";
import FilterSideBar from "../components/filter-side-bar";

export default function Products() {
  const [items, setItems] = useState(null);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  if (!items) return null;

  return (
    <div className="products-container">
      <h1>Shop</h1>

      <FilterSideBar
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />

      <div className="products-list">
        {items
          .filter((product) =>
            checkedList.length === 0
              ? true
              : checkedList.includes(product.brand)
          )
          .map((product, index) => (
            <div key={index} className="product-item">
              <img src={`img/${product.img}`} alt={`Product ${index + 1}`} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Description: {product.details}</p>
              <Button type="primary">Add to cart</Button>
            </div>
          ))}
      </div>
    </div>
  );
}
