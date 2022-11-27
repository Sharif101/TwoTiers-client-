import React from "react";
import { useLoaderData } from "react-router-dom";
import Bike from "../Bike/Bike";
import "./Bikes.css";

const Bikes = () => {
  let bikes = useLoaderData();
  return (
    <div className="bikes">
      {bikes.map((bike) => (
        <Bike bike={bike} key={bike._id}></Bike>
      ))}
    </div>
  );
};

export default Bikes;
