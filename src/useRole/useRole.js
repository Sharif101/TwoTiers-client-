import React, { useEffect, useState } from "react";

const useRole = (user) => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setUserRole(data[0].roleIndentify));
    }
  }, [user]);
  return [userRole];
};

export default useRole;
