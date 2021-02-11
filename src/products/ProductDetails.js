import {useState} from "react";
import './Product.css';
import { Card , Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import UpdateProductForm from '..products/UpdateProductForm';


const ProductDetails = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);

  const id = parseInt(props.match.params.id)
  const product = props.products.filter(recipe => product.id === id)[0];

  const handleUpdateProduct = () => { 
    props.setCurrentProduct(props.product)
    setRedirect(true);
    
  } 

  const handleClickDelete = () => {
    axios.delete(`${API_BASE_URL}/product/${id}`, null, { headers: { 'Authorization': `Bearer ${localStorage.accessToken}` } }) 
      .then(response => {
        props.reFetchRecipes();
        setRedirect(true);
      })
      .catch(error => {
        console.log(error);
      })
  }

  if (redirect) {
    return <Redirect to={{pathname: "/product/edit", state: { from: props.location } }}/>
  } else {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title>{props.currentUser.name}</Card.Title> */}
          {/* <Card.Img variant="top" src={props.product.imageUrl1} alt="" className="product-card__img" /> */}
          <Card.Title>{props.product.playerName}</Card.Title>
          <Button onClick={handleUpdateProduct}>Edit</Button>
        </Card.Body>
      </Card>
    );
  }

};
export default ProductDetails;