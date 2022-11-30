import React from "react";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import "./AllSellercard.css";

const AllSellercard = ({ seller, handleDelete }) => {
  let { name, email, _id } = seller;
  return (
    <div className="all-rev">
      <div className="rev">
        <h6>
          Seller Name: <span>{name}</span>
        </h6>
        <p>{email}</p>
      </div>
      <div className="rev-btn">
        <button onClick={() => handleDelete(_id)}>delete</button>
      </div>
    </div>
  );
};

export default AllSellercard;
