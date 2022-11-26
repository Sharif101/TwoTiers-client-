import React from "react";
import { Container } from "react-bootstrap";
import { BallTriangle } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <Container className="loader">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Container>
  );
};

export default Loader;
