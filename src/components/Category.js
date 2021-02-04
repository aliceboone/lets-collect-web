import React from 'react'
import { Card} from "react-bootstrap";

const Category = ({category}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{category.name}</Card.Title>
        </Card.Body>
        </Card> 
    )
}

export default Category;
