import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/5cPk8Vs/Basketball-hoop-net-and-ball-side-view.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/st1Yf6F/football.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/jHkhvqg/baseball.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Home;
