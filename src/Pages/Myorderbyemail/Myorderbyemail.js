import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Myorderbyemail.css";

const Myorderbyemail = ({ order }) => {
  let {
    name,
    img,
    seller_email,
    seller_name,
    phone,
    location,
    resale_price,
    original_price,
    years_of_use,
    purchase_year,
    status,
    description,
  } = order;
  return (
    <div>
      <Card className="card-cour">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body className="card-bd">
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text className="sell-info">
            <div className="d-flex">
              <h5>Name:</h5> <p> {name}</p>
            </div>
            <div className="d-flex">
              <h5>Email:</h5> <p> {seller_email}</p>
            </div>

            <div className="d-flex">
              <h5>phone:</h5> <p> {phone}</p>
            </div>

            <div className="d-flex">
              <h5>status:</h5> <p> {status}</p>
            </div>

            <div className="d-flex">
              <h5>Resale Price:</h5> <p>{resale_price}</p>
            </div>
            <div className="d-flex">
              <h5>Orginal Price:</h5> <p>{original_price}</p>
            </div>
            <div className="d-flex">
              <h5>Using year:</h5> <p>{years_of_use}</p>
            </div>
            <div className="d-flex">
              <h5>Seller Name:</h5> <p>{seller_name}</p>
            </div>
            <div className="d-flex">
              <h5>Location:</h5> <p> {location}</p>
            </div>
          </Card.Text>
          {/* <button className="explore">Explore</button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Myorderbyemail;
