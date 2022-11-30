import React from "react";
import Card from "react-bootstrap/Card";

const Advertise = ({ adver }) => {
  let { name, img } = adver;
  return (
    <div>
      <Card className="card-cour">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body className="card-bd">
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Advertise;
