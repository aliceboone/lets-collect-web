import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  // const {imageUrl1, playerName} = props
  
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{props.currentUser.name}</Card.Title> */}
          {/* <Card.Img variant="top" src={props.product.imageUrl1} alt="" className="product-card__img" /> */}
          <Card.Img variant="top" src={props.product.imageUrl1} />
          <Card.Title>{props.product.playerName}</Card.Title>
          <Card.Title>{props.product.releaseYear}</Card.Title>
        </Card.Body>
      </Card>
    );
};

export default Product;
