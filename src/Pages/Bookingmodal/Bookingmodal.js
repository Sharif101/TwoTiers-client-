import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Bookingmodal = ({ bike }) => {
  let { user } = useContext(AuthContext);

  const {
    name,
    img,
    location,
    resale_price,
    original_price,
    years_of_use,
    seller_name,
  } = bike;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <button className="book_btn" onClick={handleShow}>
          Book Now
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  defaultValue={name}
                  disabled
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
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" placeholder="Number" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="meeting location" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="mx-auto p-0 pb-2">
            <button
              className="text-center book_btn pe-5 ps-5"
              onClick={handleClose}
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
