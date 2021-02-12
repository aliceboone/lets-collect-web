import React from "react";
import {} from "./Product";
import Product from "../products/Product";

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
    <div>
      <h3 className="text-center">{props.currentUser.name} Collection</h3>
      <div className="product-card-list__container">{productComponents}</div>
    </div>
  );
};

export default ProductList;
