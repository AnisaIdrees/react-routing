import React from "react";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Card = () => {

  const[products , setProducts] =useState([])  

  const fetchCards = async() => {
    try {
     let res1 = await fetch('https://dummyjson.com/products/category/mens-shirts');
     let res2 = await fetch('https://dummyjson.com/products/category/womens-tops');

     let data1 = await res1.json()
     let data2 = await res2.json()
     const combinedProducts = [...data1.products , ...data2.products]
const totalLength = data1.products.length +data2.products.length
     setProducts(combinedProducts.products)
     setProducts(totalLength.products)
     console.log(combinedProducts);
        
    } catch (error) {
        console.log('error fetch ...', error);
        
    }
  };
  useEffect(()=>{
    fetchCards()
  },[])

  return (
    <>
      <div
        className="container-fluid d-flex flex-wrap gap-4 justify-content-center
       align-item-center"
      >
        {/* <div class="card col-md-3 col-10 mt-5">
          <img
            class="mx-auto img-thumbnail"
            src="data:image/jpeg;base64,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"
            width="auto"
            height="auto"
          />
          <div class="card-body text-center mx-auto">
            <div class="cvp">
              <h5 class="card-title font-weight-bold">Yail wrist watch</h5>
              <p class="card-text">$299</p>
              <Button text="View Detail" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Card;
