import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/editCanvas.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function EditCanvas(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { refresh, setRefresh } = props;
  function editProduct(e) {
    e.preventDefault();
    axios.put(`http://localhost:2022/products/${props.data.id}`, {
      image: e.target.productImage.value,
      name: e.target.productName.value,
      stock: e.target.productStock.value,
      price: e.target.productPrice.value,
      sale: e.target.productSale.value,
      category: e.target.productCategory.value,
      id: props.data.id,
    });
    setRefresh(!refresh);
    console.log("id:", props.data.id);
    console.log(e.target.productStock.value);
    console.log(e.target.productPrice.value);
    console.log(e.target.productSale.value);
    console.log(e.target.productName.value);
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

                <section>
                  <p>Category</p>
                  <input
                    type="text"
                    name="productCategory"
                    defaultValue={props.data.category}
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
                <section>
                  <p>tailbar</p>
                  <input
                    type="text"
                    name="productDesdription"
                    id=""
                    defaultValue={props.data.description}
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
