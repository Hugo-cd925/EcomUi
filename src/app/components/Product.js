import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product() {
  const { id } = useParams();
  const url = `https://localhost:7218/api/Products/${id}`;
  const [prod, setProd] = useState(null);
  const cartFromLocalStorage = localStorage.cart
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [cart, setCart] = useState(cartFromLocalStorage);

  const addtoCart = (p) => {
    console.log("we are in addToCart");
    setCart([...cart, { ...p }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProd(res.data);
    });
  }, [url]);

  if (prod) {
    return (
      <div>
        <Container>
          <div
            className="card mt-5 col-8 offset-3"
            style={{ width: "50%" }}
          >
            <img style={{ width: "50%" }} src={prod.img} class="card-img-top offset-3 fluid mt-4" alt={prod.name} />
            <div class="card-body">
              <h5 class="card-title text-center">{prod.name}</h5>
              <p class="card-text">
                {prod.description}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${prod.price}</li>
            </ul>
            <div class="card-body">
            <button className="btn btn-primary offset-9" onClick={() => addtoCart(prod)}>Add to cart</button>
            </div>
          </div>
        </Container>

        {/* <button className="btn btn-outline-success">Go to cart ({cart.length})</button> */}
      </div>
    );
  } else {
    return <>Product is loading...</>;
  }
}

export default Product;
