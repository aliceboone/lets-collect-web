import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProductForm.css";
import { API_BASE_URL } from "../constants/index";
import { Link} from 'react-router-dom'

const AddProductForm = (props) => {
  const defaultFormFields = {
    category: "",
    playerName: "",
    releaseYear: "",
    brand: "",
    setName: "",
    team: "",
    cardNumber: "",
    cardCondition: "",
    grade: "",
    gradedBy: "",
    currentValue: "",
    pricePaid: "",
    priceSold: "",
    notes: "",
    imageUrl1: "",
    imageUrl2: "",
  };

  const [formFields, setFormFields] = useState({ ...defaultFormFields });
  const [categoriesList, setCategoriesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [productList, setProductList] = useState([]);

  // Add product
  const addProduct = (newProduct) => {
    console.log(newProduct);
    axios
      .post(`${API_BASE_URL}/product`, newProduct, {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        const newProductList = [...productList, response.data];
        setProductList(newProductList);
        setErrorMessage("Product Successfuly added");
      })
      .catch((error) => {
        setErrorMessage(`Unable to add a product`);
      });
  };

  // Get Category
  useEffect(() => {
    axios
      .get(API_BASE_URL + `/category`, {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        setCategoriesList(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const onInputChange = (event) => {
    const newFormFields = { ...formFields };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onSelectChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.currentTarget.value,
    });
  };

  const onFormSubmit = (event) => {
    console.log(formFields);
    event.preventDefault();
    addProduct(formFields);
    setFormFields({ defaultFormFields });
  };

  return (
    
      <div className="login-content">
        <form onSubmit={onFormSubmit}>
          <h4 className="new-card-form__header">Add item to your collection</h4>
          <div>
            <label className="exampleInputEmail1">Category</label>
            <select
              className="form-control"
              name="category"
              onChange={onSelectChange}>
              {categoriesList.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="exampleInputEmail1">Name</label>
            <input
              id="playerName"
              name="playerName"
              onChange={onInputChange}
              value={formFields.playerName}
              className="form-control"
              // placeholder="Player Name"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Release Year</label>
            <input
              id="releaseYear"
              name="releaseYear"
              onChange={onInputChange}
              value={formFields.releaseYear}
              className="form-control"
              // placeholder="Release Year"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Brand</label>
            <input
              id="brand"
              name="brand"
              onChange={onInputChange}
              value={formFields.brand}
              className="form-control"
              // placeholder="Brand"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Set</label>
            <input
              id="setName"
              name="setName"
              onChange={onInputChange}
              value={formFields.setName}
              className="form-control"
              // placeholder="Set "
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Team</label>
            <input
              id="team"
              name="team"
              onChange={onInputChange}
              value={formFields.team}
              className="form-control"
              // placeholder="Team"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              onChange={onInputChange}
              value={formFields.cardNumber}
              className="form-control"
              // placeholder="Card Number"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Card Condition</label>
            <input
              id="cardCondition"
              name="cardCondition"
              onChange={onInputChange}
              value={formFields.cardCondition}
              className="form-control"
              // placeholder="Card Condition"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Grade</label>
            <select
              className="form-control"
              name="grade"
              // placeholder="Grade"
              onChange={onSelectChange}>
              <option></option>
              <option>10</option>
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <label className="exampleInputEmail1">Graded By</label>
            <select
              className="form-control"
              name="gradeBy"
              // placeholder="Grade By"
              onChange={onSelectChange}>
              <option></option>
              <option>PSA</option>
              <option>BGS</option>
              <option>SGC</option>
            </select>
          </div>
          <a target="_blank" href="https://www.ebay.com/b/Trading-Cards/bn_7116496578">Seach on ebay to add a current value to your card</a>
          <div>
            <label className="exampleInputEmail1">Current Value</label>
            <input
              id="currentValue"
              name="currentValue"
              onChange={onInputChange}
              value={formFields.currentValue}
              className="form-control"
              // placeholder="Current Value"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Price Paid</label>
            <input
              id="pricePaid"
              name="pricePaid"
              onChange={onInputChange}
              value={formFields.pricePaid}
              className="form-control"
              // placeholder="Price Paid"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Price Sold</label>
            <input
              id="priceSold"
              name="priceSold"
              onChange={onInputChange}
              value={formFields.priceSold}
              className="form-control"
              // placeholder="Price Sold"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Notes</label>
            <input
              id="notes"
              name="notes"
              onChange={onInputChange}
              value={formFields.notes}
              className="form-control"
              // placeholder="Add extra notes"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Image Front</label>
            <input
              id="imageUrl1"
              name="imageUrl1"
              onChange={onInputChange}
              value={formFields.imageUrl1}
              className="form-control"
              // placeholder="Image front"
              type="text"/>
          </div>
          <div>
            <label className="exampleInputEmail1">Image Back</label>
            <input
              id="imageUrl2"
              name="imageUrl2"
              onChange={onInputChange}
              value={formFields.imageUrl2}
              className="form-control"
              // placeholder="Image Back"
              type="text"/>
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Save
          </button>
        </form>
        <div className="login-container">
      {errorMessage ? (
        <div class="alert alert-success" role="alert">
          <h4 className="validation-errors-display">{errorMessage}</h4>
        </div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
};

export default AddProductForm;
