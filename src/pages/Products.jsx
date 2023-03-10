//import { products } from "../util/data";
import Product from "../components/mainComponents/Product";
import "../styles/products.css";
import React, { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import Button from "react-bootstrap/Button";
//import { Outlet, Route, Router, Routes, useParams } from "react-router-dom";

import ProductCanvas from "../components/mainComponents/ProductCanvas";
import Pagination from "../components/Pagination";
import { ProductContext } from "../App";

export default function Products(prop) {
  /* */
  const { products, setProducts } = useContext(ProductContext);

  const { refresh, setRefresh } = prop;

  const length = Math.ceil(products.length / 8);

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
          <ProductCanvas />
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
                <th scope="col"></th>
              </tr>
            </thead>
            <Product
              // products={products}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          </table>
        </section>

        <section>
          <Pagination lastPage={length} />
        </section>
      </div>
    </div>
  );
}
