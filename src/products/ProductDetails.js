import { useState } from "react";
import axios from "axios";
import "./Product.css";
import { Button } from "react-bootstrap";
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

  return (
    <div className="container">
    {/* //   <img src={product.imageUrl1} alt="" className="productD-card__img"/>
    //   <h1>{product.playerName}</h1> */}

 

    <div class="row row-list">
      <div class="col-xs-3">
        <img src={product.imageUrl1} alt="" className="productD-card__img"/>
      </div>
      <div class="col-xs-2 container-img">
        <img src={product.imageUrl1}/> 
      </div>
      <div class="col-xs-7 container-paragraph">
        <h4>{product.playerName}</h4>
        <h5>{product.realeseYear}</h5>
        <h5>{product.brand}</h5>
      </div>
        <Button variant="primary" as={Link} to={`/product/${product.id}/edit`}>Edit</Button>
   <Button  variant="danger"onClick={handleDeleteProduct}>
    Delete
</Button>
  { errorMessage ? <div class="alert alert-success" role="alert"><h4 className="validation-errors-display">{errorMessage}</h4></div> : '' }
    </div> 
  </div>
  );
};
export default ProductDetails;

