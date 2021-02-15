import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = (props) => {

  const cardsTotal = props.products.length 

 let overallValue = 0;
 props.products.forEach(product => {
   overallValue += product.pricePaid;
 })
 
 let profit = 0;
 props.products.forEach(product => {
   if (!product.priceSold) return 
   profit += product.priceSold - product.pricePaid;
 })

 

  return (
    <Container>
      <h1>Show Transaction History</h1>

      <Row>
        <Col>Overall Cards in Collection</Col>
        <Col>{cardsTotal} items</Col>
      </Row>

      <Row>
        <Col>Overall Cards Sold</Col>
        <Col>{cardsTotal} items</Col>
      </Row>

      <Row>
        <Col>Overall amount spent in collection</Col>
        <Col>${overallValue}</Col>
      </Row>

      <Row>
        <Col>Profit made with cards sold</Col>
        <Col>${profit}</Col>
      </Row>
    </Container>
  )
}

export default Portfolio; 
