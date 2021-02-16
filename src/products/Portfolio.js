import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = (props) => {

  let cardsTotalInCollection = 0;
  props.products.forEach((product) => {
    cardsTotalInCollection = props.products.length ;
  });

  let overallValueSpent = 0;
  props.products.forEach((product) => {
    overallValueSpent += product.pricePaid;
  });

  let overallCardsSold  = 0;
  props.products.forEach((product) => {
    if (product.priceSold !== null) return;
    overallCardsSold = product.priceSold.length;
  });

  // let overallCardsSold = 0;
  // props.products.forEach((product) => {
  //   if (product.priceSold) return;
  //   overallCardsSold = product.priceSold.length;
  // });

  let profit = 0;
  props.products.forEach((product) => {
    if (!product.priceSold) return;
    profit += product.priceSold - product.pricePaid;
  });

  return (
    <div className="container">
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="blue-column">
              <img
                className="portfolio"
                src=" https://i.ibb.co/tbDTB49/collection.jpg"/>
            </div>
            <div class="blue-column">
              Items in Collection
              <br />
              {cardsTotalInCollection}
            </div>
          </div>
          <div class="column">
            <div class="blue-column">
              <img
                className="portfolio"
                src="https://i.ibb.co/28H0sWD/sold.jpg"/>
            </div>
            <div class="blue-column">
              Overall Cards Sold <br />
              {overallCardsSold}
            </div>
          </div>
        </div>
      </div>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="blue-column">
              <img
                className="portfolio"
                src="https://i.ibb.co/j5mMRsm/spent.jpg"/>
            </div>
            <div class="green-column">
              Amount spent in collection
              <br />${overallValueSpent}
            </div>
          </div>
          <div class="column">
            <div class="blue-column">
              <img
                className="portfolio"
                src="https://i.ibb.co/v4k99b4/profit.jpg"/>
            </div>
            <div class="green-column">
              Profit made on cards sold
              <br />${profit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
