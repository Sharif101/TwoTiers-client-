import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <p>
        {" "}
        <Link to="allseller">All Seller</Link>
      </p>
      <p>
        <Link to="allbuyers">All Buyer</Link>
      </p>
      <p>
        <Link to="reportitem">Reported Item</Link>
      </p>
      <p>
        <Link to="addproduct">Added Product</Link>
      </p>
      <p>
        <Link to="myorders">My Orders</Link>
      </p>
    </div>
  );
};

export default Sidenav;
