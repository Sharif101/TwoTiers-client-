import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSellercard from "../AllSellercard/AllSellercard";

const AllSeller = () => {
  let sellers = useLoaderData();

  const [mySeller, setMySeller] = useState(sellers);
  console.log(mySeller);
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`http://localhost:5000/users/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = mySeller.filter((del) => del._id !== _id);
            setMySeller(remaining);
          }
        });
    }
  };
  return (
    <div>
      {mySeller.map((seller) => (
        <AllSellercard
          seller={seller}
          key={seller._id}
          handleDelete={handleDelete}
        ></AllSellercard>
      ))}
    </div>
  );
};

export default AllSeller;
