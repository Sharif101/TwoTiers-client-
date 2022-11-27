import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = ({ categories }) => {
  let { img, name, _id } = categories;
  return (
    <div>
      <Card className="card-cour">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body className="card-bd">
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Link to={`/category/${_id}`}>
            <button className="explore">Explore</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Categories;
