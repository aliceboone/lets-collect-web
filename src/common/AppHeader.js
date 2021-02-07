
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
// import NavBar from "../components/bars/NavBar";
// import NewProductForm from "./components/NewProductForm";
// import AdminPage from "../components/bars/AdminPage";
// import Cart from "../components/product/Cart";
// import Products from "./components/Products";
// import Home from '../home/Home';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className="app-branding">
            <Link to="/" className="app-title">
              Lets go Sports Cards
            </Link>
          </div>
          <div className="app-options">
            <nav className="app-nav">
              {this.props.authenticated ? (
                <ul>
                  <li>
                    <NavLink to="/">Products</NavLink>
                  </li>

                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <button onClick={this.props.onLogout}>Logout</button>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">Signup</NavLink>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default AppHeader;

