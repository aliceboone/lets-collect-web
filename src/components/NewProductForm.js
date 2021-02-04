import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NewProductForm.css';

const NewProductForm = (props)=> {

    const [formFields, setFormFields] = useState({
      name: '',
      brand: '',
      description: '',
      price:'' ,
      releaseYear:'' ,
      imageUrl: '',
      inventory: '',
      category: '',
    });

const onInputChange = (event) => {
    const newFormFields = { ...formFields }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
};

const onFormSubmit = event => {
    event.preventDefault();

    props.addProductCallback(formFields);
    
    setFormFields({
      name: '',
      brand: '',
      description: '',
      price:'' ,
      releaseYear:'' ,
      imageUrl: '',
      inventory: '',
      category: '',
    });
  };

  return(
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="mame" placeholder="Product" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="brand" placeholder="Brand" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Price</Form.Label>
          <Form.Control type="Price" placeholder="Price" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Release Year</Form.Label>
          <Form.Control type="release_year" placeholder="Release Year" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Image</Form.Label>
          <Form.Control type="Image" placeholder="Image" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Inventory</Form.Label>
          <Form.Control type="inventory" placeholder="Inventory" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Category</Form.Label>
        <Form.Control as="select">
        {Categories.map((category) => {(category.name)})}
        </Form.Control>
        </Form.Group>
     </Form>
  </Container>
  )
}

NewProductForm.propTypes = {
  addProductCallback: PropTypes.func.isRequired
};

export default NewProductForm;