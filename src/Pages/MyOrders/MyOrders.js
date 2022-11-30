import React from "react";
import { useLoaderData } from "react-router-dom";
import Orderbymail from "../Orderbymail/Orderbymail";

const MyOrders = () => {
  let myoders = useLoaderData();
  console.log(myoders);
  return (
    <div>
      {myoders.map((order) => (
        <Orderbymail order={order} key={order._id}></Orderbymail>
      ))}
    </div>
  );
};

export default MyOrders;
