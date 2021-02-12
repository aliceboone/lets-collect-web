import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProductForm.css";
import { API_BASE_URL } from "../constants/index";

const AddProductForm = (props) => {
  const defaultFormFields = {
    brand: "",
    cardNumber: "",
    currentValue: "",
    description: "",
    grade: "",
    playerName: "",
    pricePaid: "",
    priceSold: "",
    releaseYear: "",
    setName: "",
    category: "",
    cardCondition: "",
    imageUrl1: "",
    imageUrl2: "",
    team: "",
    notes: ""
  };

  const [formFields, setFormFields] = useState({ ...defaultFormFields });
  const [categoriesList, setCategoriesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [productList, setProductList] = useState([]);
 
// Add product
  const addProduct = (newProduct) => {
    console.log(newProduct)
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
    axios.get(API_BASE_URL + `/category`, { headers: {'Authorization': `Bearer ${localStorage.accessToken}`}})
      .then(response => {
        setCategoriesList(response.data);
        setErrorMessage('');
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
    console.log(formFields)
    event.preventDefault();
    addProduct(formFields);
    setFormFields({ defaultFormFields });
  };

  return (
    <form onSubmit={onFormSubmit} className="justify-content-center">
      <h2 className="new-card-form__header">Add new card to your collection</h2>
      <div className="form-group">

      <label className="exampleInputEmail1">Brand:</label>
        <input
          id="brand"
          name="brand"
          onChange={onInputChange}
          value={formFields.brand}
          className="form-control w-50"
          placeholder="Brand"
          type="text"
        />

    <label className="exampleInputEmail1">Card Number</label>
        <input
          id="cardNumber"
          name="cardNumber"
          onChange={onInputChange}
          value={formFields.cardNumber}
          className="form-control w-50"
          placeholder="Card number"
          type="text"
        />      

<label className="exampleInputEmail1">Current Value</label>
        <input
          id="currentValue"
          name="currentValue"
          onChange={onInputChange}
          value={formFields.currentValue}
          className="form-control w-50"
          placeholder="currentValue"
          type="text"
        />

        <label className="exampleInputEmail1">Player Name:</label>
        <input
          id="playerName"
          name="playerName"
          onChange={onInputChange}
          value={formFields.playerName}
          className="form-control w-50"
          placeholder="Player Name"
          type="text"
        />
        <label className="exampleInputEmail1">Image Front:</label>
        <input
          id="imageUrl1"
          name="imageUrl1"
          onChange={onInputChange}
          value={formFields.imageUrl1}
          className="form-control w-50"
          placeholder="image front"
          type="text"
        />
        <label className="exampleInputEmail1">Image Back :</label>
        <input
          id="imageUrl2"
          name="imageUrl2"
          onChange={onInputChange}
          value={formFields.imageUrl2}
          className="form-control w-50"
          placeholder="Image Back"
          type="text"
        />
       
        <label className="exampleInputEmail1">Team:</label>
        <input
          id="team"
          name="team"
          onChange={onInputChange}
          value={formFields.team}
          className="form-control w-50"
          placeholder="Player Team"
          type="text"
        />
        <label className="exampleInputEmail1">Description:</label>
        <input
          id="description"
          name="description"
          onChange={onInputChange}
          value={formFields.description}
          className="form-control w-50"
          placeholder="Description"
          type="text"
        />
        <label className="exampleInputEmail1">Set Name:</label>
        <input
          id="setName"
          name="setName"
          onChange={onInputChange}
          value={formFields.setName}
          className="form-control w-50"
          placeholder="Set "
          type="text"
        />
        <label className="exampleInputEmail1">Card Condition:</label>
        <input
          id="cardCondition"
          name="cardCondition"
          onChange={onInputChange}
          value={formFields.cardCondition}
          className="form-control w-50"
          placeholder="Card Condition"
          type="text"
        />
        <label className="exampleInputEmail1">ReleaseYear</label>
        <input
          id="releaseYear"
          name="releaseYear"
          onChange={onInputChange}
          value={formFields.releaseYear}
          className="form-control w-50"
          placeholder="Release year"
          type="text"
        />
        <label className="exampleInputEmail1">Grade</label>
        <input
          id="grade"
          name="grade"
          onChange={onInputChange}
          value={formFields.grade}
          className="form-control w-50"
          placeholder="Grade"
          type="text"
        />
       
        <label className="exampleInputEmail1">Price Paid</label>
        <input
          id="pricePaid"
          name="pricePaid"
          onChange={onInputChange}
          value={formFields.pricePaid}
          className="form-control w-50"
          placeholder="Price paid"
          type="text"
        />
        <label className="exampleInputEmail1">Price Sold</label>
        <input
          id="priceSold"
          name="priceSold"
          onChange={onInputChange}
          value={formFields.priceSold}
          className="form-control w-50"
          placeholder="price"
          type="text"
        />
       
        <label className="exampleInputEmail1">Notes</label>
        <input
          id="notes"
          name="notes"
          onChange={onInputChange}
          value={formFields.notes}
          className="form-control w-50"
          placeholder="Add extra notes"
          type="text"
        />
        <label className="exampleFormControlSelect1">Category</label>
        <select
          className="form-control w-50"
          name="category"
          onChange={onSelectChange}
        >
          {categoriesList.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-outline-success mt-3">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
