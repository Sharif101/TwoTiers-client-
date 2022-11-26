import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useContext } from "react";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Loader from "../../Utilities/Loader/Loader";

const Login = () => {
  // let title = "";
  // document.title = title;
  let [error, setError] = useState("");

  let { providerlogin, githubLogin, signIn, loading } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loader></Loader>;
  }

  const googleProvider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();

  let handlegooglesingin = () => {
    providerlogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  // let { signIn } = useContext(AuthContext);

  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User Not found. Please Create your account.");
        }

        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password. Please Try Again.");
        }
      });
  };

  let handlegithub = () => {
    githubLogin(githubprovider)
      .then((result) => {
        let user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <h3>
          {/* Please Login here{" "} */}
          <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <small className="err">{error}</small>
        <p className="mt-4">
          You haven't any account
          <Link to="/register">register here</Link>
        </p>
        <button className="log-button">Log In</button>
        <div>
          <p className="text-center">Or sing up using</p>
          <div className="d-flex flex-column social-singup">
            <button onClick={handlegooglesingin}>Google</button>
            <button onClick={handlegithub}>Github</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
