// import React, { useContext, useEffect, useState } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Myorderbyemail from "../Myorderbyemail/Myorderbyemail";
import toast, { Toaster } from "react-hot-toast";

const MyProduct = () => {
  let myproducts = useLoaderData();
  // let { user } = useContext(AuthContext);
  console.log(myproducts);

  // const [myOrders, setmyOrders] = useState([]);

  // useEffect(() => {
  //   fetch(`https://resale-wine.vercel.app/bike/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setmyOrders(data));
  // }, []);

  const [mypro, setMypro] = useState(myproducts);
  console.log(mypro);
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`https://resale-wine.vercel.app/bikes/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Delete Successfully");
            const remaining = mypro.filter((del) => del._id !== _id);
            setMypro(remaining);
          }
        });
    }
  };

  return (
    <div className="bikes">
      <Toaster position="top-center" reverseOrder={false} />
      {mypro.map((order) => (
        <Myorderbyemail
          order={order}
          key={order._id}
          handleDelete={handleDelete}
        ></Myorderbyemail>
      ))}
    </div>
  );
};

export default MyProduct;
