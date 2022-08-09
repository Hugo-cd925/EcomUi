import axios from 'axios';
import React, { useEffect } from 'react'

function Product() {
  const url = 'https://localhost:7218/api/Products';

  useEffect(()=>{
    axios.get(url).then((res)=>res)
  }, [url])
  
  
    return (
    <div>
        <div className='container'></div>
    </div>
  )
}

export default Product