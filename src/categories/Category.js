import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = (props) => {
    
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.category.name}</Card.Title>
        <Link to={`/category/${props.category.id}`}> Select</Link>
      </Card.Body>
    </Card>
  );
};

export default Category;
