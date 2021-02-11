import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import AppHeader from "../common/AppHeader";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import Profile from "../user/profile/Profile";
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler";
import NotFound from "../common/NotFound";
import LoadingIndicator from "../common/LoadingIndicator";
import { getCurrentUser} from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constants";
import PrivateRoute from "../common/PrivateRoute";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./App.css";
import ProductList from "../products/ProductList";
import Product from '../products/Product';
import UpdateProductForm from "../products/UpdateProductForm";
// import CategoryList from "../components/CategoryList";



const App = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)
  

    // Event handler
    const onLogout = () => {
      localStorage.removeItem(ACCESS_TOKEN);
      setAuthenticated(false);
      setCurrentUser(null);
      Alert.success("You're safely logged out!");
    }
  
    useEffect(() => {
      setLoading(true);
  
      getCurrentUser()
      .then(response => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
      });   
    },[])
  
    if(loading) {
      return <LoadingIndicator />
    }
    
  return (
    <div className="app">
      <div className="app-top-box">
        <AppHeader
          authenticated={authenticated}
          onLogout={onLogout}
        />
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
            exact
            path="/"
            authenticated={authenticated}
            currentUser={currentUser}
            component={ProductList}
            setCurrentProduct={setCurrentProduct}
          ></PrivateRoute>

          <PrivateRoute
            path="/product/:id"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Product}
          ></PrivateRoute>

          <PrivateRoute
            path="/product/edit"
            authenticated={authenticated}
            currentUser={currentUser}
            component={UpdateProductForm}
            currentProduct={currentProduct}
          ></PrivateRoute>

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
    </div>
  );
};
export default App;
