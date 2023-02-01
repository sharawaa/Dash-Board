import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/editCanvas.css";
import axios from "axios";

export default function EditCanvas(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function editProduct(e, id) {
    e.preventDefault();
    axios.put(`http://localhost:2022/products/${id}`, {
      image: e.target.productImage.value,
      name: e.target.productName.value,
      stock: e.target.productStock.value,
      price: e.target.productPrice.value,
      sale: e.target.productSale.value,
    });


    console.log("uurchlugdsun une",e.target.productPrice.value)
  }

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
          <form className="container editCanvas" onSubmit={editProduct}>
            <div className="editCanvas-img">
              <p>Барааны зураг</p>
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
              <button className="editCanvas-button" type="submit">
                ХАДГАЛАХ
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
