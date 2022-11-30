// import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Myorderbyemail from "../Myorderbyemail/Myorderbyemail";

const MyProduct = () => {
  let myproducts = useLoaderData();
  // let { user } = useContext(AuthContext);
  console.log(myproducts);

  // const [myOrders, setmyOrders] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/bike/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setmyOrders(data));
  // }, []);

  return (
    <div className="bikes">
      {myproducts.map((order) => (
        <Myorderbyemail order={order} key={order._id}></Myorderbyemail>
      ))}
    </div>
  );
};

export default MyProduct;
