import React from "react";
import Card from "react-bootstrap/Card";

const ReportedItemshow = ({ reportitem }) => {
  let { name, img, time } = reportitem;

  return (
    <div>
      <Card className="card-cour">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body className="card-bd">
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text className="sell-info">
            <div className="d-flex">
              <h5>Name:</h5> <p> {name}</p>
            </div>
            <div className="d-flex">
              <h5>Time:</h5> <p> {time}</p>
            </div>
          </Card.Text>
          {/* <button className="explore">Explore</button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReportedItemshow;
