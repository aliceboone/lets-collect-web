import { useState } from "react";
import axios from "axios";
import "./Product.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL, ACCESS_TOKEN } from "../constants/index";
import ProductList from "../products/ProductList";

const ProductDetails = (props) => {
  const [show, setShow] = useState(false);
  const [productList, setProductList] = useState([]);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product-card__container">
      <img src={product.imageUrl1} alt="" />
      <h1>{product.playerName}</h1>
      <button as={Link} to={`/product/${product.id}/edit`}>
        Edit
      </button>
      <button onClick={handleDeleteProduct}>
        Delete
      </button>
    </div>
  );
};
export default ProductDetails;
