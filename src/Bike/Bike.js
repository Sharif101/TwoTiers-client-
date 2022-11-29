import React from "react";
import Card from "react-bootstrap/Card";
import Bookingmodal from "../Pages/Bookingmodal/Bookingmodal";
import "./Bike.css";

const Bike = ({ bike }) => {
  let {
    name,
    img,
    location,
    resale_price,
    original_price,
    years_of_use,
    seller_name,
  } = bike;
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
              <h5>Location:</h5> <p> {location}</p>
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
          </Card.Text>
          {/* <button className="explore">Explore</button> */}
          {/* --------modal---------- */}
          <Bookingmodal bike={bike}></Bookingmodal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bike;
