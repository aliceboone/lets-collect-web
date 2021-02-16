import { useState } from "react";
import axios from "axios";
import "./ProductDetails.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../constants/index";

const ProductDetails = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { imageUrl1, playerName } = props;
  const id = parseInt(props.match.params.id);
  const product = props.productList.filter((product) => product.id === id)[0];

  const handleDeleteProduct = () => {
    axios
      .delete(`${API_BASE_URL}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then(() => {
        props.setProductList();
        window.history.push(`/product/${id}`)
        setErrorMessage("Product Successfuly deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let profitPerItem = 0 
  if(!product.priceSold === null){
    profitPerItem = product.priceSold - product.pricePaid
  }
  

  return (
    <Container className="container">
      <Row>
        <Col><img src={product.imageUrl1} alt="" className="productDetails-card__img"/></Col>
        <Col> <h4>{product.playerName}</h4>
            <h6>Release Year: {product.realeseYear}</h6>
            <h6>Brand: {product.brand}</h6>
            <h6>Set: {product.set}</h6>
            <h6>Team: {product.team}</h6>
            <h6>Card Condition: {product.cardCondition}</h6>
            <h6>Grade: {product.grade}</h6>
            <h6>Graded by: {product.gradBy}</h6>
            <h6>Price paid: {product.pricePaid}</h6>
            <h6>Price Sold: {product.priceSold}</h6>
            <h6>Profit: {profitPerItem}</h6>
            <h6>Notes: {product.notes}</h6>
            </Col>
        <Col> <img src={product.imageUrl2}/> </Col>
      </Row>
      <Container>
      <Row>
      <Col></Col>
      <Col>
        <Button variant="primary" as={Link} to={`/product/${product.id}/edit`}>Edit</Button>
        <Button  variant="danger"onClick={handleDeleteProduct}>
          Delete
      </Button>
      </Col>
      <Col></Col>
      </Row>
      </Container>
    </Container>
  );
};
export default ProductDetails;

