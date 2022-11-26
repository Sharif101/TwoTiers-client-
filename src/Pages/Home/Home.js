import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assest/pexels-photo-2393821.jpeg";
import pic2 from "../../assest/pexels-photo-750841.jpeg";
import pic3 from "../../assest/pexels-photo-819805.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption className="slide-text">
            <h3>Two Tires</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic2} alt="Second slide" />

          <Carousel.Caption className="slide-text">
            <h3>Two Tires</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide">
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption className="slide-text">
            <h3>Two Tires</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
