import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Products.css";

const Products = (props) => {
  const productComponents = props.products.map((product) => {
    return (
      <Link
        to={{ pathname: "/product/" + product.id }}
        key={product.id}
        className="recipe-card-link__container"
      >
        <Card {...product} />
      </Link>
    );
  });

  return (
    <div>
      <h1>CARDS</h1>
      {/* <RecipeUrlForm reFetchRecipes={props.reFetchRecipes}/> */}

      <div className="recipe-card-list__container">{productComponents}</div>
    </div>
  );
};

export default Products;
