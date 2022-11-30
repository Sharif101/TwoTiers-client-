import React from "react";
import { useLoaderData } from "react-router-dom";
import ReportedItemshow from "../ReportedItemshow/ReportedItemshow";

const ReportedItem = () => {
  let reporteditem = useLoaderData();
  console.log(reporteditem);
  return (
    <div className="bikes">
      {reporteditem.map((reportitem) => (
        <ReportedItemshow
          reportitem={reportitem}
          key={reportitem._id}
        ></ReportedItemshow>
      ))}
    </div>
  );
};

export default ReportedItem;
