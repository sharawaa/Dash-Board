import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/editCanvas.css";

export default function EditCanvas(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Өөрчлөх
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Өөрчлөх</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container editCanvas">
            <div className="editCanvas-img">
              <p>Барааны нэр</p>
              <input
                type="text"
                name="productImage"
                defaultValue={props.data.image}
              />
            </div>

            <div className="d-flex">
              <section>
                <section>
                  <p>Барааны нэр</p>
                  <input
                    type="text"
                    name="productName"
                    defaultValue={props.data.name}
                  />
                </section>
                <section>
                  <p>Үлдэгдэл</p>
                  <input
                    type="text"
                    name="productStock"
                    defaultValue={props.data.stock}
                  />
                </section>
              </section>

              <section>
                <section>
                  <p>Барааны үнэ (₮)</p>
                  <input
                    type="text"
                    name="productPrice"
                    defaultValue={props.data.price}
                  />
                </section>
                <section>
                  <p>Хямдрал (%-иар)</p>
                  <input
                    type="text"
                    name="productSale"
                    id=""
                    defaultValue={props.data.sale}
                  />
                </section>
              </section>
            </div>

            <div>
              <button className="editCanvas-button">ХАДГАЛАХ</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
