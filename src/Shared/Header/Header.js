import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  let [username, setUsername] = useState(false);

  let handleSingout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} alt="" />
            <Link to="/" className="nav-title">
              Two Tires
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>

              {/* -------------------------- */}

              {user?.photoURL && (
                <div className="nav-image">
                  <img
                    onMouseEnter={() => setUsername(true)}
                    onMouseLeave={() => setUsername(false)}
                    src={user.photoURL}
                    alt=""
                    className="acc-img"
                  />
                  <p
                    className={
                      username ? "visible showName" : "visible hideName"
                    }
                  >
                    {user?.displayName}
                  </p>
                </div>
              )}

              {user?.uid ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <button
                    className="log-btn"
                    variant="info"
                    onClick={handleSingout}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="log-btn" variant="info">
                    Log in
                  </button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
