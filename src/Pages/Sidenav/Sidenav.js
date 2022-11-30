import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useRole from "../../useRole/useRole";
import "./Sidenav.css";

const Sidenav = () => {
  let { user } = useContext(AuthContext);
  console.log(user);
  let [userRole] = useRole(user);
  console.log(userRole);
  return (
    <div className="sidenav">
      {userRole === "Seller" || userRole === "admin" ? (
        <>
          {userRole === "admin" && (
            <>
              <p>
                <Link to="allseller">All Seller</Link>
              </p>
              <p>
                <Link to="allbuyers">All Buyer</Link>
              </p>
              <p>
                <Link to="reportitem">Reported Item</Link>
              </p>
            </>
          )}

          {userRole === "Seller" && (
            <>
              <p>
                <Link to="addproduct">Added Product</Link>
              </p>
              <p>
                <Link to={`myproudct/${user?.email}`}>My Product</Link>
              </p>
            </>
          )}
        </>
      ) : (
        <>
          {(userRole === "Buyer" || user?.uid) && (
            <p>
              <Link to={`myorders/${user?.email}`}>My Orders</Link>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Sidenav;
