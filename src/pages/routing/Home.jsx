import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  const clothesProduct = async () => {
    let res = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    let data = await res.json();
    console.log(data.products);
  };
  clothesProduct();

  return (
    <>
      <div className="container-xxl hero-sec-home">
        <div className="text-box">
          <p className="text-start fs-2">Smart Products</p>
          <h1 className=" fs-1">
            Winter Offer <br /> 2025 Collection
          </h1>
          <Button text="Shop Now" />
        </div>
        <div className="image-box">
          <img src="summar-shopping-removebg-preview.png" alt="" />
        </div>
      </div>

      <div className="home-section2 container-xxl">
        <h2 className="text-center mt-5 fw-bold">___ DAILY DEALS ! ___</h2>
        <Card />
      </div>
    </>
  );
};

export default Home;
