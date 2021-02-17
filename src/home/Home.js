import React, { Component } from 'react';
import './Home.css';
import SearchNews from '../news/SearchNews.js';
import '../news/SearchNews.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="appHeader">
          <div className="title">
            <h1>Stay on top of the lastest  News🔥</h1>
          </div>
        </div>
        <SearchNews/>
      </div>
    );
  }
}

export default Home;
