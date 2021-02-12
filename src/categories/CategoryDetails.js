import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL} from "../constants/index";
import "./Category.css";

const CategoyDetails = (props) => {
  const id = parseInt(props.match.params.id);
  const category = props.categoryList.filter((category) => category.id === id)[0];

  const handleDeleteCategory= () => {
    axios
      .delete(`${API_BASE_URL}/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then(() => {
        props.setCategoryList();
        window.history.push(`/category/${id}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product-card__container">
      <h1>{category.name}</h1>
      <Button as={Link} to={`/category/${category.id}/edit`}>
        Edit
      </Button>
      <Button onClick={handleDeleteCategory}>
        Delete
      </Button>
    </div>
  );
};
export default CategoryDetails;
