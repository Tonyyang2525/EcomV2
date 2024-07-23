import React, { useState, useEffect } from "react";
import { Button, Flex } from "antd";
import "../components/css/products.css";
import FilterSideBar from "../components/filter-side-bar";
import "../components/css/filterSideBar.css";

export default function Products() {
  const [items, setItems] = useState(null);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    let BASE_URL = "";

    if (process.env.NODE_ENV === "development") {
      BASE_URL = "http://localhost:3306/all-products";
    } else if (process.env.NODE_ENV === "production") {
      BASE_URL = "https://ecomv2-dev.onrender.com/all-products";
    }
    // BASE_URL = "http://localhost:3306/all-products";
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);
  if (!items) return null;

  return (
    <>
      <h1>PRODUCTS</h1>
      <p>Welcome to the products page</p>
      <Flex direction="row">
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
                <img
                  src={`img/${product.img}`}
                  alt={`Product ${index + 1}`}
                  height="200px"
                  width="200px"
                />
                <h2>{product.img}</h2>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Description: {product.details}</p>
                <Button type="primary">Add to cart</Button>
              </div>
            ))}
        </div>
      </Flex>
    </>
  );
}
