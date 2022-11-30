import React from "react";
import Card from "react-bootstrap/Card";

const Orderbymail = ({ order }) => {
  let { name, username, re_price, number, location } = order;
  return (
    <div className="bikes">
      <Card className="card-cour">
        <Card.Body className="card-bd">
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text className="sell-info">
            <div className="d-flex">
              <h5>Name:</h5> <p> {name}</p>
            </div>
            <div className="d-flex">
              <h5>Buyer name:</h5> <p> {username}</p>
            </div>

            <div className="d-flex">
              <h5>phone:</h5> <p> {number}</p>
            </div>
            <div className="d-flex">
              <h5>Price:</h5> <p> {re_price}</p>
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

export default Orderbymail;
