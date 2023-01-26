//import { products } from "../util/data";
import Product from "../components/mainComponents/Product";
import "../styles/products.css";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Example from "./newmodal";

export default function Products(prop) {
  const { products } = prop;

  /* */
  const [userName1, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [duraaraa, setDuraaraa] = useState("");
  let obj = [
    {
      price,
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [data, setProducts] = useState(data);

  return (
    <div className=" product-container ">
      <div className="product">
        <section className="product-title">
          <p className="product-title-p">Бүтээгдэхүүнүүд</p>
        </section>
        <Button
          variant="primary"
          onClick={handleShow}
          className="product-button"
        >
          +Бараа нэмэх
        </Button>
        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          className="offcanvas"
        >
          <Offcanvas.Header closeButton className="offcanvas-header">
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body container">
            <div className="offcanvas-body-image">
              <section>
                <input className="offcanvas-body-image-input-1" type="text" />
              </section>
              <section>
                <input type="text" />
                <input type="text" />
              </section>
            </div>

            <div className="d-flex">
              <section>
                <section>
                  <p>Барааны нэр</p>
                  <input
                    type="text"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </section>
                <section>
                  <p>Үлдэгдэл</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setDuraaraa(e.target.value)}
                  />
                </section>
              </section>

              <section>
                <section>
                  <p>Барааны үнэ (₮)</p>
                  <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </section>
                <section>
                  <p>Хямдрал (%-иар)</p>
                  <input type="text" name="" id="" />
                </section>
              </section>
            </div>

            <Example />

            <div>
              <section className="d-flex">
                <section>
                  <p>Категори сонгох</p>
                  <input type="text" />
                </section>
                <section>
                  <p>Брэнд сонгох</p>
                  <input type="text" />
                </section>
              </section>
              <section>
                <button className="offcanvas-body-button">ХАДГАЛАХ</button>
              </section>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <section className="product-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Барааны зураг</th>
                <th scope="col">Барааны нэр</th>
                <th scope="col">Үнэ</th>
                <th scope="col">Үлдэгдэл</th>
                <th scope="col">Хямдрал %</th>
                <th scope="col">Категори</th>
                <th scope="col">:</th>
              </tr>
            </thead>

            {products &&
              products.map((unit) => (
                <Product
                  image={unit.image}
                  name={unit.name}
                  price={unit.price}
                  sale={unit.sale}
                  category={unit.category}
                  remainder={unit.stock}
                />
              ))}
          </table>
        </section>
        <section></section>
      </div>
      ;
    </div>
  );
}
