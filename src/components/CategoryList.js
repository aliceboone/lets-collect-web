import { useEffect, useState } from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";
import Category from "./Category.js";
import { API_BASE_URL } from "../constants/index";
import AddCategoryForm from "./AddCategoryForm.js";

const CategoryList = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_BASE_URL + `/category`, { headers: {'Authorization': `Bearer ${localStorage.accessToken}`}})
      .then(response => {
        setCategoryList(response.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);


  const addCategory = (newCategory) => {
    axios
      .post(`${API_BASE_URL}/category/new`, newCategory, { headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        const newCategoryList = [...categoryList, response.data];
        setCategoryList(newCategoryList);
        setErrorMessage("Category Successfuly added");
      })
      .catch((error) => {
        setErrorMessage(`Unable to add a category`);
      });
  };

  return(
    <main>
    <AddCategoryForm addCategory={addCategory}/>
      <Container className="container">
        { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
        {categoriesList.map((category) => (
          <div key={category.id}>
            <Category category={category}/>
          </div>
      ))}
      </Container>
    </main>
  );
};

export default CategoryList;