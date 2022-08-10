import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Product() {
  const {id} = useParams();
  const url = `https://localhost:7218/api/Products/${id}`;
  const [prod, setProd] = useState(null);
  useEffect(()=>{
    axios.get(url).then(res=>{
      setProd(res.data);
    })
  }, [url])
  console.log(prod);
    if(prod){
      return (
    <div>
        <div className='container'>
        <h1 className="m-5 text-center">{prod.name}</h1>
        <img style={{ width: "35%" }} src={prod.img}/>
        <p>{prod.description}</p>
        <p>${prod.price}</p>
        <button>Add to cart</button>
        </div>
    </div>
  )}
  else{
    return(
      <>
      Product is loading...
      </>
    )
  }
}

export default Product