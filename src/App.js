import React from "react";
import NavBar from "./components/NavBar";
import NewProductForm from "./components/NewProductForm";
import AdminPage from "./components/AdminPage";
import Cart from "./components/Cart";
// import Home from "./components/Home";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

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
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
            <Route exact path="/admin/manageproducts/product/new">
              <NewProductForm />
            </Route>
            <Route path="/category/:category">
              <ProductsInCategory />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

const ProductsInCategory = () => {
  const params = useParams();
  return <div>Category {params.category}</div>;
};

export default App;
