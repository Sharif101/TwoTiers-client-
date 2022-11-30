import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Bookingmodal = ({ bike }) => {
  let { user } = useContext(AuthContext);

  const { name, resale_price } = bike;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState({});

  const time = new Date();
  const [currentTime, setcurrentTime] = useState(time);

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(orders);
    fetch("http://localhost:5000/allorders", {
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
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    let time = new Date();
    setcurrentTime(time);
    const newOrder = { ...orders, currentTime };
    newOrder[field] = value;
    setOrders(newOrder);
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <>
        <button className="book_btn" onClick={handleShow}>
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
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
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
                  onBlur={handleInputBlur}
                  name="location"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="mx-auto p-0 pb-2">
            <button
              className="text-center book_btn pe-5 ps-5"
              onClick={handleClose}
              type="submit"
            >
              Submit
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Bookingmodal;
