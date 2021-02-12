import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";
import {} from "./Product";
import AddProductForm from "./AddProductForm";
import Product from "../products/Product";
import UpdateProductForm from "./UpdateProductForm";

const ProductList = (props) => {


 
  const productComponents = props.productList.map((product) => {
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
