import React from "react";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Myorderbyemail.css";

const Myorderbyemail = ({ order, handleDelete }) => {
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
    _id,
  } = order;

  const handleAdvertise = () => {
    const advertise = {
      name: name,
      img: img,
      item_id: _id,
      time: new Date(),
      resale_price: resale_price,
      original_price: original_price,
      years_of_use: years_of_use,
      purchase_year: purchase_year,
      status,
    };
    fetch("https://resale-wine.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully adversitse");
        }
      });
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
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
              <h5>Purchase year:</h5> <p>{purchase_year}</p>
            </div>
            <div className="d-flex">
              <h5>Seller Name:</h5> <p>{seller_name}</p>
            </div>
            <div className="d-flex">
              <h5>Location:</h5> <p> {location}</p>
            </div>
            <div className="d-flex">
              <h5>Description:</h5> <p> {description}</p>
            </div>
          </Card.Text>
          <button className="explore" onClick={() => handleAdvertise(_id)}>
            Advertise
          </button>
          <button className="explore" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Myorderbyemail;
