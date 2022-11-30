import React from "react";

const AllBuyercard = ({ buyer }) => {
  let { name, email, _id } = buyer;
  return (
    <div>
      <div className="all-rev">
        <div className="rev">
          <h6>
            Seller Name: <span>{name}</span>
          </h6>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default AllBuyercard;
