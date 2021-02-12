import {useState} from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";


const UpdateCategoryForm =(props) => {

const [formFields, setFormFields] = useState({name:""});
const [categoryList, setCategoryList] = useState([]);
const [errorMessage, setErrorMessage] = useState(null);

const updateCategory = (updateCategory) => {
  axios
    .put(`${API_BASE_URL}/category/${props.match.params.id}`, updateCategory, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    })
    .then((response) => {
      setErrorMessage(`Category succsessfully updated`);
      setUpdate(false);
    })
    .catch((error) => {
      setErrorMessage(`Failed to update category`);
    });
};

const onInputChange = (event) => {
  setFormFields({
    ...formFields,
    [event.target.name]: event.currentTarget.value,
  });
};

  // event handlers for textarea
  const onTextareaChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.currentTarget.value,
    });
  };

const onFormSubmit = (event) => {
  event.preventDefault();
  updateCategory(formFields);
  
  setFormFields({name:event.target.value});
};

return (
  <form onSubmit={onFormSubmit} className="justify-content-center">
    <h2 className="new-card-form__header">Update Category</h2>
    <div className="form-group">
      <label className="exampleInputEmail1">Name:</label>
      <input
        id="name"
        name="name"
        onChange={onInputChange}
        value={formFields.name}
        className="form-control w-50"
        placeholder="Category Name"
        type="text"
      />
      <button type="submit" className="btn btn-outline-success mt-3">
        Save Category
      </button>
    </div>
  </form>
);
};

export default UpdateCategoryForm;