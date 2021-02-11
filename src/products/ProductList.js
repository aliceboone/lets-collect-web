import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";
import {} from "./Product";
import AddProductForm from "./AddProductForm";
import Product from "../products/Product";
import UpdateProductForm from "./UpdateProductForm";

const ProductList = (props) => {
  const [productList, setProductList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/product`, {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        setProductList(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const deleteProduct = (id) => {
    const newProductList = productList.filter((product) => {
      return product.id !== id;
    });

    if (newProductList.length < productList.length) {
      axios
        .delete(`${API_BASE_URL}/product/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.accessToken}` },
        })
        .then((response) => {
          setErrorMessage(`Card sucessfully deleted `);
          setProductList(newProductList);
        })
        .catch((error) => {
          setErrorMessage(`Failed to delete product`);
        });
      setProductList(newProductList);
    }
  };

  const productComponents = productList.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        setCurrentProduct={props.setCurrentProduct}
      />
    );
  });

  return (
    <div className="container">
      <div>
        <h3 className="text-center">
          {props.currentUser.name} Collection
        </h3>
      </div>
      <div>{productComponents}</div>
    </div>
  );
};

export default ProductList;
