import {useEffect, useState} from 'react'
import { getProductbyEmail } from '../products/ProductService';
import { Table, Button } from 'react-bootstrap';
import ProductTable from './ProductTable';

const ProductList = () => {

    const googleUser = JSON.parse(window.sessionStorage.getItem("user"));
        const [products, setProducts] = useState({});
        const  [apiError, setApiError] = useState(false);
    useEffect(() => {
        
        getProductbyEmail(setProducts, googleUser?.email, setApiError);
    }, [products]);
    const checkProduct=()=>{
        console.log(products);
        console.log(products[0]);
        console.log(products[0].name);
    };
  return (
    <>
   <ProductTable props={products}/>
    <Button onClick={checkProduct} >Check</Button>
     </>
  )
}

export default ProductList