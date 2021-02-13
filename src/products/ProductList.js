import React from "react";
import {} from "./Product";
import SearchBar from "./SearchBar";
import Product from "../products/Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  return (
    <div>
      <SearchBar setSearch={(term) => setSearch(term)} />
      <h3 className="text-center">{props.currentUser.name} Collection</h3>
      <Container>{productComponents}</Container>
      {/* <div className="product-card-list__container">{productComponents}</div> */}
    </div>
  );
};

export default ProductList;
