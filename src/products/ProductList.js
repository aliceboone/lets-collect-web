import React from "react";
import SearchBar from "./SearchBar";
import Product from "../products/Product";
import {Container, Row, Col} from "react-bootstrap";


const chunk = (array, chunkSize) => {
  const result = [];
  for (var i = 0; i < array.length; i += chunkSize)
    result.push(array.slice(i, i + chunkSize));
  return result;
};
const ProductList = (props) => {
  const [search, setSearch] = React.useState("");

  const searchItems = props.productList.filter((product) => {
    if (search == null) {
      return true;
    } else if (product.playerName === null) {
      return false;
    } else if (
      product.playerName.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  
  const productComponents = chunk(searchItems, 3).map((products) => {
    return (
      <Row>
        {products.map((product) => (
          <Col sm={12} md={4}>
          <Product
            product={product}
            key={product.id}
            setCurrentProduct={props.setCurrentProduct}
          /></Col>
        ))}
      </Row>
    );
  });

  // if ({product.priceSold} === null || {props.product.priceSold} === 0) return list
  return (
    <div>
      <div>
      <SearchBar className="searchbar" setSearch={(term) => setSearch(term)} />
      </div>
     <br/>
      <h4 className="text-center">{props.currentUser.name} Collection</h4><br/>
      <Container>
        {productComponents}
      </Container>
    </div>
  );
};

export default ProductList;
