import axios from 'axios';
import React, {useEffect, useHistory, useState} from 'react'
import { useNavigate } from 'react-router-dom';

// const cartFromLocalStorage = JSON.parse.apply(localStorage.getItem('cart'));
function Cart() {
    const navigate = useNavigate();

  const cartFromLocalStorage = localStorage.cart? JSON.parse(localStorage.getItem('cart')) : [];
  const [cart, setCart] = useState(cartFromLocalStorage);
    const toCheckout = () =>{
        navigate('/checkout');
    }
  
    const removeFromCart = (productToRemove) =>{
        setCart(cart.filter(prod=>prod !==productToRemove));
        if(cart.length<2){
            localStorage.setItem("cart", JSON.stringify([]))            
        }else{
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
  
    return (
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Home / Cart</h6>
                </div>
            </div>

            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th className="text-center">Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item,index)=>{return(
                                            <tr key={index}>
                                            
                                                <>
                                            <td width="10%">
                                                <img src={item.img} alt='Prod Image' width="50px" height="50px"/>
                                            </td>
                                            <td>{item.name}</td>
                                            <td width="15%" className='text-center'>{item.price}</td>                                            
                                            <td className='text-center' width='10%'>
                                                <button onClick={()=>removeFromCart(item)} type='button' className='btn btn-danger btn-sm'>Remove</button>
                                            </td>
                                            </>
                                            
                                        </tr>
                                        )
                                            })}                                        
                                    </tbody>
                                </table>
                                <button onClick={toCheckout} className='btn btn-warning '>Checkout</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }



export default Cart