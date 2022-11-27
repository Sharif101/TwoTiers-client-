import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assest/pexels-photo-2393821.jpeg";
import pic2 from "../../assest/pexels-photo-750841.jpeg";
import pic3 from "../../assest/pexels-photo-819805.jpeg";
import bannerpic from "../../assest/harley-1921700__340.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  let categories = useLoaderData();
  console.log(categories);
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

      {/* ----------------------------------------- */}

      <div className="section-bikes">
        <hr />
        <Row>
          <Col lg="5">
            <div className="bike-img">
              <img src={bannerpic} alt="" />
            </div>
          </Col>
          <Col lg="7">
            <div className="text">
              <h2>Best Bikes Available Here</h2>
              <p>
                Etiam ornare tincidunt purus et lobortis. Morbi viverra
                fringilla magna a convallis. Vestibulum et enim pretium, euismod
                mi id, imperdiet risus. Maecenas ut tortor maximus diam euismod
                convallis. Quisque lorem nisi, convallis a justo eget, aliquam
                gravida odio.
              </p>
              <h5>
                {" "}
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                Vestibulum scelerisque risus lobortis
              </h5>
              <hr />
              <h5>
                {" "}
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                Pellentesque at ipsum tortor
              </h5>
              <hr />
              <h5>
                {" "}
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                Phasellus placerat ultricies nulla
              </h5>
            </div>
          </Col>
        </Row>
      </div>
      <hr />

      {/* ---------Categories-------choise ur brand-------------------- */}
      <div className="catagory">
        <h2>Choise your brand</h2>
        <div className="categories">
          {categories.map((categories) => (
            <Categories
              categories={categories}
              key={categories._id}
            ></Categories>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
