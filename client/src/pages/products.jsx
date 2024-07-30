import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "../components/css/products.css";
import FilterBrandCheckList from "../components/filter-brand-checklist";
import FilterPriceSlider from "../components/filter-price-slider";

export default function Products() {
  const [items, setItems] = useState(null);
  const [checkedList, setCheckedList] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(30);

  useEffect(() => {
    // Fetch data from API
    // react-app-api-url is set in .env
    // save it in the environment so we can fetch the api endpoint dynamically based on the environment
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  if (!items) return null;

  let filteredItems = items;

  // Sorting logic based on checkedList for price
  if (checkedList.includes("lowToHigh")) {
    filteredItems = [...items].sort((a, b) => a.price - b.price); // Low to High
  } else if (checkedList.includes("highToLow")) {
    filteredItems = [...items].sort((a, b) => b.price - a.price); // High to Low
  }

  return (
    <div className="products-container">
      <div className="filter-container">
        <h1>Shop</h1>

        <FilterBrandCheckList
          //pass props to filterBrandCheckList page
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
        <FilterPriceSlider
          //pass props to filterPriceSlider page
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}
        />
      </div>
      <div className="products-list">
        {filteredItems
          .filter((product) =>
            checkedList.length === 0
              ? true
              : checkedList.includes(product.brand)
          )
          .filter((product) => product.price >= min && product.price <= max)
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
