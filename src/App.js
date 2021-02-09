import React from "react";
import NavBar from "./components/NavBar";
import NewProductForm from "./components/NewProductForm";
import Products from "./components/Products";
import {BrowserRouter as Router, Switch, Route, useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/product/new">
              <NewProductForm />
            </Route>
            <Route path="/category/:category">
              <ProductsInCategory />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const ProductsInCategory = () => {
  const params = useParams();
  return <div>Category {params.category}</div>;
};

export default App;
