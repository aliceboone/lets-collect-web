import {useState} from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";


const AddCategoryForm =(props) => {

const [formFields, setFormFields] = useState({name:""});
const [categoryList, setCategoryList] = useState([]);
const [errorMessage, setErrorMessage] = useState(null);

const addCategory = (newCategory) => {
  axios
    .post(`${API_BASE_URL}/category`, newCategory, { headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    })
    .then((response) => {
      const newCategoryList = [...categoryList, response.data];
      setCategoryList(newCategoryList);
      setErrorMessage("Category Successfuly added");
      console.log(response)
    })
    .catch((error) => {
      setErrorMessage(`Unable to add a category`);
    });
};

const onInputChange = (event) => {
  const newFormFields = { ...formFields };
  newFormFields[event.target.name] = event.target.value;
  // setFormFields(newFormFields);
  setFormFields({name:event.target.value});
};

const onFormSubmit = (event) => {
  event.preventDefault();
  addCategory(formFields);
  
};


return (
  <div className="login-container">
    <div className="login-content">
      <form onSubmit={onFormSubmit} className="justify-content-center">
        <h2 className="new-card-form__header">Add Category</h2>
        <div className="form-group">
          <label className="exampleInputEmail1">Name:</label>
          <input
            id="name"
            name="name"
            onChange={onInputChange}
            value={formFields.name}
            className="form-control"
            placeholder="Category Name"
            type="text"
          />
          <button type="submit" className="btn btn-outline-success mt-3">
           Save
          </button>
        </div>
      </form>
      </div>
      { errorMessage ? <div class="alert alert-success" role="alert"><h4 className="validation-errors-display">{errorMessage}</h4></div> : '' }
    </div>

);
};

export default AddCategoryForm;