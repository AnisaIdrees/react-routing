import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Button from '../components/Button';

const DetailPage = () => {

    const {id}=useParams();
    const [product, setProduct]=useState({});

    useEffect(()=>{
        
        const fetchCard= async () => {
            try {
                let res = await fetch(`https://dummyjson.com/products/${id}`);
                let data = await res.json();
                setProduct(data);
            } catch (error) {
              console.log("error fetch ...", error);
            }
          };
        fetchCard()

    },[])

  return (
<>

    <div className="container my-5">
      {product?.title ? (
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-md-6 col-12 mb-4">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 col-12">
            <h2 className="mb-3 fw-bold">{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-success fw-semibold">Rs. {product.price}</h4>
            <p className="mt-3">
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <Button text='Add to Cart'/>
          </div>
        </div>
      ) : (
       
<div
  className="w-100 d-flex justify-content-center align-items-center position-relative"
  style={{ minHeight: "300px" }}
>
  <div className="loader"></div>
</div>


      )}
    </div>

</>
  )
}

export default DetailPage
