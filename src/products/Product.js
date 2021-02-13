import React from "react";
import { Card} from "react-bootstrap";
import { Link} from 'react-router-dom'

const Product = (props) => {
 
    return (
      <div className="product-card__container" >
      <img src={props.product.imageUrl1} alt='' className="product-card__img" />
      <div className="product-card__content">
        <h4>{props.product.playerName}</h4>
        <h5>{props.product.releaseYear}</h5>
        <Link to={`/product/${props.product.id}`}> Select</Link>
      </div>
    </div>
    );
};

export default Product;
