import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useParams } from "react-router-dom";
import AppHeader from "../common/AppHeader";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import Profile from "../user/profile/Profile";
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler";
import NotFound from "../common/NotFound";
import LoadingIndicator from "../common/LoadingIndicator";
import { getCurrentUser } from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constants";
import PrivateRoute from "../common/PrivateRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./App.css";
import ProductList from "../products/ProductList";
import UpdateProductForm from "../products/UpdateProductForm";
import AddProductForm from "../products/AddProductForm";
import AddCategoryForm from "../categories/AddCategoryForm";
import ProductDetails from "../products/ProductDetails";
import { API_BASE_URL } from "../constants/index";
import Portfolio from "../products/Portfolio";
import Home from "../home/Home";
import Footer from "../footer/Footer";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productList, setProductList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // GetProduct
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/product`, {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        setProductList(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const ProductsByCategory = () => {
    const params = useParams();
    return <div>Category {params.category}</div>;
  };

  // Event handler
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    Alert.success("You're safely logged out!");
  };

  useEffect(() => {
    setLoading(true);

    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="app">
      <div className="app-top-box">
        <AppHeader authenticated={authenticated} onLogout={onLogout} />
        <hr/>
      </div>
      <div className="app-body">
        <Switch>
          <PrivateRoute
            path="/profile"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Profile}
          ></PrivateRoute>

          <PrivateRoute
            path="/add-card"
            authenticated={authenticated}
            currentUser={currentUser}
            component={AddProductForm}
          ></PrivateRoute>

          <PrivateRoute
            path="/add-category"
            authenticated={authenticated}
            currentUser={currentUser}
            component={AddCategoryForm}
          ></PrivateRoute>

          <PrivateRoute
            path="/category/:category"
            authenticated={authenticated}
            currentUser={currentUser}
            component={ProductsByCategory}
          ></PrivateRoute>

          <PrivateRoute
            path="/portfolio"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Portfolio}
            products={productList}
          ></PrivateRoute>

          <PrivateRoute
            exact
            path="/"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Home}
          ></PrivateRoute>

          <PrivateRoute
            exact
            path="/product"
            authenticated={authenticated}
            currentUser={currentUser}
            component={ProductList}
            setCurrentProduct={setCurrentProduct}
            productList={productList}
          ></PrivateRoute>

          <PrivateRoute
            path="/product/:id/edit"
            authenticated={authenticated}
            currentUser={currentUser}
            component={UpdateProductForm}
            productList={productList}
          ></PrivateRoute>

          <PrivateRoute
            path="/product/:id"
            authenticated={authenticated}
            currentUser={currentUser}
            component={ProductDetails}
            productList={productList}
          ></PrivateRoute>

          {/* <PrivateRoute
            path="/product/new"
            authenticated={authenticated}
            currentUser={currentUser}
            component={AddProductForm}
            currentProduct={currentProduct}
          ></PrivateRoute> */}

          <Route
            path="/login"
            render={(props) => (
              <Login authenticated={authenticated} {...props} />
            )}
          />

          <Route
            path="/signup"
            render={(props) => (
              <Signup authenticated={authenticated} {...props} />
            )}
          ></Route>

          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>

          <Route path="/product"></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </div>
      <Alert
        stack={{ limit: 3 }}
        timeout={3000}
        position="top-right"
        effect="slide"
        offset={65}
      />
        <Footer />
    </div>
  
  );
};
export default App;
