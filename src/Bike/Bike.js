import React from "react";
import Card from "react-bootstrap/Card";
import Bookingmodal from "../Pages/Bookingmodal/Bookingmodal";
import toast, { Toaster } from "react-hot-toast";
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
    _id,
  } = bike;

  const handleReportToAdmin = (_id) => {
    const reportedItem = {
      name: name,
      img: img,
      item_id: _id,
      time: new Date(),
    };
    fetch(`http://localhost:5000/reportedItem/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Reported!");
        } else {
          toast.error("Something went worng.");
        }
      })
      .catch((err) => console.error(err));
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
          <button className="explore" onClick={() => handleReportToAdmin(_id)}>
            Report
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bike;
