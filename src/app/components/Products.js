import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const url = "https://ecomtrading.azurewebsites.net/Products";
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [products]);

  if (products) {
    return (
      <div className="container my-5">
        <h1 className="m-5 text-center">Products Page</h1>
        <div className="row mt-5 pt-4">
          {products.map((prod, index) => {
            return (
              <div 
              key={index}
              className="col-md-3">
                  <a
                    href={`/products/${prod.id}`}
                    className="text-decoration-none text-dark text-center"
                  >
                    <div className="d-flex justify-content-center align-items-center-center">
                        <img
                        className="mx-auto"
                        style={{ width: "65%" }}
                        src={prod.img}
                        alt={`Picture of ${prod.name}`}
                    />
                    </div>
                        <div className="mt-3 fw-bold">{prod.name}</div>
                  </a>
                  <div className="d-flex justify-content-center align-items-center-center">${prod.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <>
              <h1 className="m-5 text-center">Products Page</h1>
              <h3>No Products to load!</h3>

      </>;
}

export default Products;
