import React, {useState, useEffect } from 'react';
import axios from 'axios'
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
  const [categoriesList, setCategoriesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`/category`)
      .then(response => {
        setCategoriesList(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);


  const addProduct = (product) => {
    axios
    // include category in the category
      .post("/product", product)
      .then((response) => {
        setErrorMessage("Product successfully added!");
      })
      .catch((error) => {
        setErrorMessage("Not able to add product, try again");
      });
  };

const onInputChange = (event) => {
  const newFormFields = { ...formFields }
  newFormFields[event.target.name] = event.target.value;
  setFormFields(newFormFields);
};

const onSelectChange = (event)=> {
  setFormFields({...formFields, 
    [event.target.name]: event.currentTarget.value})
}

const onFormSubmit = event => {
  event.preventDefault();

  addProduct(formFields);
    
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
    <form onSubmit={onFormSubmit} className="justify-content-center">
      <h2 className="new-card-form__header">Add new product</h2>
        <div className="form-group">
        <label className="exampleInputEmail1">Name:</label>
        <input id="name"
                name="name"
                onChange={onInputChange}
                value={formFields.name}
                className="form-control w-50" 
                placeholder="name"
                type="text"
                />
        <label className="exampleInputEmail1">Brand:</label>
        <input id="brand"
                name="brand"
                onChange={onInputChange}
                value={formFields.brand}
                className="form-control w-50" 
                placeholder="brand"
                type="text"
                />
        <label className="exampleInputEmail1">Description:</label>
        <input id="description"
                name="description"
                onChange={onInputChange}
                value={formFields.description}
                className="form-control w-50" 
                placeholder="description"
                type="text"
                />
        <label className="exampleInputEmail1">Price</label>
        <input id="price"
                name="price"
                onChange={onInputChange}
                value={formFields.price}
                className="form-control w-50" 
                placeholder="price"
                type="text"
                />
        <label className="exampleInputEmail1">ReleaseYear</label>
        <input id="releaseYear"
                name="releaseYear"
                onChange={onInputChange}
                value={formFields.releaseYear}
                className="form-control w-50" 
                placeholder="releaseYear"
                type="text"
                />

        <label className="exampleInputEmail1">Price</label>
        <input id="price"
                name="price"
                onChange={onInputChange}
                value={formFields.price}
                className="form-control w-50" 
                placeholder="price"
                type="text"
                />
        <label className="exampleInputEmail1">ImageUrl</label>
        <input id="imageUrl"
                name="imageUrl"
                onChange={onInputChange}
                value={formFields.imageUrl}
                className="form-control w-50" 
                placeholder="imageUrl"
                type="text"
                />
        <label className="exampleFormControlSelect1">Category</label>
        <select className="form-control w-50"
                name="category"
                onChange={onSelectChange}>
                {categoriesList.map((category) => (
                  <option key={category.id}
                  value={category.id}>{category.name}</option>
                  ))
                }
              </select>
              <button
                type="submit"
                className="btn btn-outline-success mt-3"
              >Add Product</button>
            </div>
          </form>
        )
      }

export default NewProductForm;