
import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Card = () => {
  const [products, setProducts] = useState([]);

  const fetchCards = async () => {
    try {
      let res1 = await fetch(
        "https://dummyjson.com/products/category/mens-shirts"
      );
      let res2 = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );

      let data1 = await res1.json();
      let data2 = await res2.json();

      const combinedProducts = [...data1.products, ...data2.products];

      setProducts(combinedProducts);
      console.log(combinedProducts);
    } catch (error) {
      console.log("error fetch ...", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="container-fluid d-flex flex-wrap gap-4 justify-content-center align-items-center">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
        
        <div className="card  col-md-3 col-10 mt-5"key={index}>
            <img className='mx-auto img-thumbnail'
                src={product.images[0]}
                />
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <h5 className="card-title font-weight-bold">{product?.title}</h5>
                    <p className="card-text">{product?.price}</p>
                    <Button text='view detail'/>
                </div>
            </div>
        

    </div>
        ))
      ) : (

<div
  className="w-100 d-flex justify-content-center align-items-center position-relative"
  style={{ minHeight: "300px" }}
>
  <div className="loader"></div>
</div>
      )}
    </div>
  );
};

export default Card;
