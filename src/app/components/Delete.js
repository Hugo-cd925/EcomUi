import React, {useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Delete(props) {
    const url = `https://ecomtrading.azurewebsites.net/Products/${props.prodId}`;
    const navigate = useNavigate();
    console.log(props.prodId)
    function deleteProd(){
        axios.delete(url).catch(e=>e);
        navigate('/products');
    };
    return (
    <div className='d-inline-block mx-4' style={{width:"20%"}}>
        <button className="btn btn-danger" onClick={deleteProd}>Delete</button>
    </div>
  )
}

export default Delete