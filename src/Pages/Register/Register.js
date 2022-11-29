import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import app from "../../firebase/firebase.confiq";
import "./Register.css";

const auth = getAuth(app);
const Register = () => {
  // let title = "Shutter Up -Register";
  // document.title = title;
  let { createUser } = useContext(AuthContext);
  // console.log("user", createUser);
  let navigate = useNavigate();
  let location = useLocation();

  let [role, setRole] = useState("buyer");

  let from = location.state?.from?.pathname || "/";

  let handleChange = (e) => {
    let info = e.target;
    let value = info.value;
    setRole(value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let name = form.name.value;
    let photourl = form.photourl.value;
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email, password, name, photourl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error);
          });

        form.reset();
        navigate(from, { replace: true });
        const currentUser = {
          name: name,
          email: email,
          img: photourl,
          roleIndentify: role,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <h3>Register here</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control
            type="text"
            name="photourl"
            placeholder="Photo url"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div class="radio-grp">
          <ul>
            <li>
              <input
                onChange={handleChange}
                type="radio"
                id="f-option"
                name="selector"
                value="Buyer"
                checked={role === "Buyer"}
              />
              <label for="f-option">Buyer</label>

              <div class="check"></div>
            </li>

            <li>
              <input
                onChange={handleChange}
                type="radio"
                id="s-option"
                name="selector"
                value="Seller"
                checked={role === "Seller"}
              />
              <label for="s-option">Seller</label>

              <div class="check">
                <div class="inside"></div>
              </div>
            </li>
          </ul>
        </div>
        <button className="log-button">Register</button>
      </Form>
    </div>
  );
};

export default Register;
