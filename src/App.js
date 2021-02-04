import React from "react";
import Products from './components/Products'
import Categories from './components/Categories'
import NavBar from './components/NavBar'
// import SlideImages from "./components/SlideImages";
// import SearchBar from './components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotrom from "./components/Jumbotrom";

const App = () => {
 
  return(
    <div className="App">
      <NavBar/>
      <div className="container">
        <Jumbotrom/>
        <Products/>
        <Categories/>
      </div>
    </div>
  )
}

export default App;
