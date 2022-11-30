import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Bookingmodal = ({ bike }) => {
  let { user } = useContext(AuthContext);
  console.log(bike);

  const { name, resale_price } = bike;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [orders, setOrders] = useState({});

  const time = new Date();
  const [currentTime, setcurrentTime] = useState(time);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const username = form.username.value;
    const useremail = form.useremail.value;
    const re_price = form.re_price.value;
    const number = form.number.value;
    const location = form.location.value;

    const orders = { name, username, useremail, re_price, number, location };
    console.log("aaa", orders);
    fetch("https://resale-wine.vercel.app/allorders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added");
          event.target.reset();
        }
      });
  };
  // const handleInputBlur = (event) => {
  //   const field = event.target.name;
  //   const value = event.target.value;
  //   let time = new Date();
  //   setcurrentTime(time);
  //   const newOrder = { ...orders, currentTime };
  //   newOrder[field] = value;
  //   setOrders(newOrder);
  // };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <>
        <button className="explore" onClick={handleShow}>
          Book Now
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddUser}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  defaultValue={name}
                  disabled
                  // onBlur={handleInputBlur}
                  name="name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="user name"
                  defaultValue={user?.displayName}
                  disabled
                  // onBlur={handleInputBlur}
                  name="username"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="user email"
                  defaultValue={user?.email}
                  disabled
                  // onBlur={handleInputBlur}
                  name="useremail"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Price"
                  defaultValue={resale_price}
                  disabled
                  // onBlur={handleInputBlur}
                  name="re_price"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  placeholder="Number"
                  // onBlur={handleInputBlur}
                  name="number"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="meeting location"
                  // onBlur={handleInputBlur}
                  name="location"
                />
              </Form.Group>
              <button
                className="text-center book_btn pe-5 ps-5"
                onClick={handleClose}
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Modal.Body>
          <Modal.Footer className="mx-auto p-0 pb-2"></Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Bookingmodal;
