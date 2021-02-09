import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  // const[cart, setCart] = useState({})
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(`/product`)
      .then((response) => {
        setProductList(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

 // this should be whatever url  for add to cart, not new product
  const addToCart = (product) => {
    axios.post("cart")
      .then((response) => {
        const updateProduct = [...product, response.data.procuct];
        setProductList(updateProduct);
        setErrorMessage("Product successfully added to cart!");
      })
      .catch((error) => {
        setErrorMessage("Not able to add product, try again");
      });
  };

  // const RemoveFromCart= (id) => {
  //     const newProductList = productList.filter((product) => {
  //       return product.id !== id;
  //     });

  //     if (newProductList.length < productList.length) {
  //       axios.delete(props.cardUrl + id)
  //         .then((response) => {
  //           setErrorMessage(`Product deleted`);
  //           setProductList(newProductList);
  //         })
  //         .catch((error) => {
  //           setErrorMessage(`Cannot delete product`);
  //         })
  //     }
  //   };

    const productsComponents = productList.map((product) => {
      return (
        <Product
          product={product}
          addToCartCallback={addToCart}
        />
      );
    });

  return (
    <div data-testid={props.keyWord}>
      <h4
        className={
          errorMessage
            ? errorMessage.includes("already")
              ? "text-warning border border-warning"
              : "text-success border border-success"
            : ""
        }
      >
        {errorMessage ? `${errorMessage}` : ""}
      </h4>
      <div className="list">{productsComponents}</div>
    </div>
  );
};

export default Products;
