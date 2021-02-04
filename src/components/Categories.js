import { useEffect, useState } from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";
import Category from "./Category.js";

const Categories = (props) => {
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

  return(
    <main>
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

export default Categories;