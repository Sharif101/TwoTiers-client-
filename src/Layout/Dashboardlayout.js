import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidenav from "../Pages/Sidenav/Sidenav";

const Dashboardlayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <Sidenav></Sidenav>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboardlayout;
