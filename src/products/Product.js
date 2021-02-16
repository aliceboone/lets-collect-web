import React from "react";
import { Link} from 'react-router-dom'
import "./Product.css";

const Product = (props) => {
 
    return (
      
      <div className="product-card__container" >
      <img src={props.product.imageUrl1} alt='' className="product-card__img" />
      <div className="product-card__content">
        <h5>{props.product.playerName}</h5>
        <h6>{props.product.releaseYear}</h6>
        <Link to={`/product/${props.product.id}`}> Select</Link>
      </div>
    </div>
    );
};

export default Product;
