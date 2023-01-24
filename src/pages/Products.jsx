import { products } from "../util/data";
import Product from "../components/mainComponents/Product";
import "../styles/products.css";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Products() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=" product-container ">
      <div className="product">
        <section className="product-title">
          <p className="product-title-p">Бүтээгдэхүүнүүд</p>
        </section>
        <Button variant="primary" onClick={handleShow} className="">
          Бараа нэмэх
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
          <Offcanvas.Body className="offcanvas-body">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>

        <section className="product-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Зураг</th>
                <th scope="col">Барааны нэр</th>
                <th scope="col">Үнэ</th>
                <th scope="col">Үлдэгдэл</th>
                <th scope="col">Хямдрал %</th>
                <th scope="col">Категори</th>
                <th scope="col">:</th>
              </tr>
            </thead>

            {products.map((unit) => (
              <Product
                image={unit.image}
                name={unit.productName}
                price={unit.price}
                sale={unit.sale}
                category={unit.category}
                remainder={unit.remainder}
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
