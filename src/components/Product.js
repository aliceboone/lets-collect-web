import React from 'react'
import { axios } from "axios";
// import UpdateProductForm from './UpdateProductForm';
import { useState, useEffect } from "react";

const Product = ({product}) => {

    const [update, setUpdate] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
    }, [update]);
  
    const updateProduct = () => {
      axios.put(`/product/${product.id}`, product)
        .then((response) => {
          setErrorMessage(`Habit ${product.id} updated`);
          setUpdate(false)
        })
        .catch((error) => {
          setErrorMessage(`Unable to update habit ${ product.id }`);
        })
    }
// Add product to the Cart

    const onFormSubmit = (event) => {
        event.preventDefault();
        product.addToCartCallback({
          name: product.name, 
          brand: product.brand,
          description: product.description,
          price: product.price,
          releaseYear: product.releaseYear,
          imageUrl: product.imageUrl,    
          inventory: product.inventory,
          category: product.category
        });
      }


      const cancelUpdateProduct = () => {
        setUpdate(false)
      }

    return (
     <div>
        <figure className="product">
        <img src={product.imageUrl} alt={product.name} />
        <figcaption>{product.name} 
        <br/>{new Date(product.releaseYear).getFullYear()}
        <br/>{new Date(product.price).getFullYear()}
      </figcaption>
    </figure> 
    </div>
)
}

export default Product
