import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink, Link} from 'react-router-dom'

const Product = (props) => {
  // const {imageUrl1, playerName} = props

  // if (redirect) {
  //   return <Redirect to={{pathname: "/product/:id", state: { from: props.location } }}/>
  // } else {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
  
          <Card.Img variant="top" src={props.product.imageUrl1} />
          <Card.Title>{props.product.playerName}</Card.Title>
          <Card.Title>{props.product.releaseYear}</Card.Title>
          <Link to={`/product/${props.product.id}`}> Select</Link>
        </Card.Body>
      </Card>
    );
};

export default Product;
