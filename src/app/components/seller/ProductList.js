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
    
    }, []);

    const checkProduct=()=>{
        console.log(products);
        console.log(products[0]);
        console.log(products[0].name);
    };
    console.log(products);
    const column = [
        { heading:'ID', value:'id' },
        { heading:'Name', value:'name' },
        { heading:'Description', value:'description'},
        {heading:'Active', value:'active'},
        {heading:'Price', value:'price'},
        {heading:'Image', value:'img'}
    ]
  return (
    <>
    <h1>Your Products</h1>
   <ProductTable prodList={products} column={column} />
   <div>
   <Button onClick={checkProduct} >Check</Button>

   </div>
     </>
  )
}

export default ProductList