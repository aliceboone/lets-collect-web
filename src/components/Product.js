import React from 'react'
import { Container, CardDeck, Card, Button} from "react-bootstrap";

const Product = ({product}) => {
  
    return (
    <Container>
        <CardDeck style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Button>Add to Cart</Button>
        </Card.Body>
        </CardDeck> 
    </Container>
    )
}

export default Product
