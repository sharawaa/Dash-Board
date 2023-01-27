import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function NewModal(prop) {

 // const { products } = prop;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [indicator, setIndicator] =useState("")
  const [indicatorName, setIndicatorName] =useState("")
  const [addIndicator, setAddIndicator] = useState();
function saveButton(){
  setAddIndicator(addIndicator,indicatorName)
  console.log(setAddIndicator)
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
        <form>
          <label>
            <section>
              <p>asx</p>
            <input type="text" name="name" onChange={(e)=>setIndicatorName(e.target.value)} />
            
            </section>
            <section>
              <p>asda</p>
              <input type="text" placeholder="" onChange={(e)=>setIndicator(e.target.value)} />
              
            </section>
            
          </label>
            <input type="submit" value="Submit" onClick={saveButton} />
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
