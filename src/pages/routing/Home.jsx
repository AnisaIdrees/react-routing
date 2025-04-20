import React from 'react'

const Home = () => {

const clothesProduct = async ()=>{

  let res = await fetch("https://dummyjson.com/products/category/womens-dresses")
  let data = await res.json()
  console.log(data.products);


}
clothesProduct()
  
  return (
<>
<div className="container-xxl hero-sec-home">
<div className="text-box">
<p className="text-start fs-2">Smart Products</p>
<h1 className=" fs-1">Winter Offer <br /> 2025 Collection
</h1>
<button className="Shopbutton">
    Shop Now
</button>
</div>
<div className="image-box">
<img src="summar-shopping-removebg-preview.png" alt="" />
</div>
</div>
</>
  )
}

export default Home
