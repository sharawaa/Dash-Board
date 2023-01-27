import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function NewModal(prop) {
  // const { products } = prop;
  const [show, setShow] = useState(false);
  const { addIndicator } = prop;
  const { setAddIndicator } = prop;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function saveButton(e) {
    e.preventDefault();
    if (
      e.target.indicatorName.value !== "" ||
      e.target.indicator.value !== ""
    ) {
      setAddIndicator([
        ...addIndicator,
        [e.target.indicatorName.value, e.target.indicator.value],
      ]);
    }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +Үзүүлэлт нэмэх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={saveButton}>
            <input type="text" name="indicatorName" />
            <input type="text" name="indicator" />
            <button onClick={handleClose} type="submit">
              SAVE
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
