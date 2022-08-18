import { useState, useEffect } from 'react';
import { createProduct } from '../products/ProductService';
import CreateProductForm from './products/CreateProductForm';
import { useNavigate } from "react-router-dom";


const PostProduct = () => {
  const googleUser = JSON.parse(window.sessionStorage.getItem("user"));

  const [product, setProduct] = useState({
    name: '',
    active: false,
    price: 0,
    description: '',
    img: '',
    sellerEmail: googleUser.email,
    categId: 0
  });

  const [apiError, setApiError] = useState(false);

  const Navigate=useNavigate();
  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleClick=()=>{
    setProduct({...product, active: true})
  };

  const sendProduct = () => {
    createProduct(product, setApiError);
  };

const  returnDashboard =()=>{
  Navigate(-1);
};
  return (
  <>
  <CreateProductForm onChange={onChange} sendProduct={sendProduct} returnDashboard={returnDashboard} />
  </>
  )
}

export default PostProduct