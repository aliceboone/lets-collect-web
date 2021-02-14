import React from 'react';
import Container from "react-bootstrap/Container";
import "./SearchBar.css";

const SearchBar = (props) => {

  const handleChange = (e) => {
    searchSpace(e)
  }

  const searchSpace = (event) => {
    let keyword = event.target.value;
    props.setSearch(keyword)
  }

  return (
    <Container>
      <div id="inputWrapper">
        <input id="input" 
        type="search" 
        placeholder="Enter a item to be searched"
        onChange={handleChange}
        value={props.search}>
        </input>
      </div>
    </Container>
  )
}
export default SearchBar;