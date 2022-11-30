import React from "react";
import { useLoaderData } from "react-router-dom";
import AllBuyercard from "../AllBuyercard/AllBuyercard";

const AllBuyer = () => {
  let buyers = useLoaderData();
  return (
    <div>
      {buyers.map((buyer) => (
        <AllBuyercard buyer={buyer} key={buyers._id}></AllBuyercard>
      ))}
    </div>
  );
};

export default AllBuyer;
