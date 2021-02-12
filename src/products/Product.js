import React from "react";
import { Card} from "react-bootstrap";
import { Link} from 'react-router-dom'

const Product = (props) => {
 
    return (
      <div className="product-card__container" >
      <img src={props.product.imageUrl1} alt='' className="product-card__img" />
      <div className="product-card__content">
        <h1>{props.product.playerName}</h1>
        <h2>{props.product.releaseYear}</h2>
        <Link to={`/product/${props.product.id}`}> Select</Link>
      </div>
    </div>

      // <Card style={{ width: "18rem" }}>
      //   <Card.Body>
  
      //     <Card.Img variant="top" src={props.product.imageUrl1} />
      //     <Card.Title>{props.product.playerName}</Card.Title>
      //     <Card.Title>{props.product.releaseYear}</Card.Title>
      //     <Link to={`/product/${props.product.id}`}> Select</Link>
      //   </Card.Body>
      // </Card>
    );
};

export default Product;
