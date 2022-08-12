import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



function Product() {
  const {id} = useParams();
  const url = `https://ecomtrading.azurewebsites.net/Products/${id}`;
  const [prod, setProd] = useState(null);
  const cartFromLocalStorage = localStorage.cart? JSON.parse(localStorage.getItem('cart')) : [];
 
  const [cart, setCart] = useState(cartFromLocalStorage);

  const addtoCart = (p) =>{
    console.log('we are in addToCart');
    setCart([...cart, {...p}]);
  }

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  useEffect(()=>{
    axios.get(url).then(res=>{
      setProd(res.data);
    })
  }, [url])
  
    if(prod){
      return (
    <div>
        <button className="btn btn-outline-success">Go to cart ({cart.length})</button>
        <div className='container'>
        <h1 className="m-5 text-center">{prod.name}</h1>
        <img style={{ width: "35%" }} src={prod.img} alt={prod.name}/>
        <p>{prod.description}</p>
        <p>${prod.price}</p>
        <input type=""></input>
        <button onClick={()=>addtoCart(prod)}>Add to cart</button>
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