import { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";
import Product from "./Product";

const Products = (props) => {
    const [productList, setProductList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    
      useEffect(() => {
        axios.get(`/product`)
          .then((response) => {
          setProductList(response.data);
          setErrorMessage('');
          })
            .catch((error) => {
            setErrorMessage(error.message);
            })
        }, []);

        // const addProduct = (product) => {
        //   axios.post("product/new")
        //     .then((response) => {
        //       const updateProduct = [...product, response.data.procuct];
        //     setProductList(updateProduct);
        //     setErrorMessage('Product successfully added!');
        //     })
        //     .catch((error) => {
        //     setErrorMessage('Not able to add product, try again');
        //     })
        // };

        // const deleteProduct = (id) => {
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

      

    return(
        <Container>
        { errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
        {productList.map((product) => (
          <div key={product.id}>
            <Product product={product}/>
          </div>
        ))}
        </Container>
    );
};

export default Products;