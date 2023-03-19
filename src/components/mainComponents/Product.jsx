import axios from "axios";
import { useParams } from "react-router-dom";
import ThreeTseg from "../icon/ThreeTseg";
import EditCanvas from "./EditCanvas";

import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProductContext } from "../../App";

export default function Product(prop) {
  const { products, setProducts } = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { refresh, setRefresh } = prop;
  const pageNumber = useParams();
  function DeleteHandler(id) {
    axios.delete(`http://localhost:2000/products/${id}`);
    setRefresh(!refresh);
  }
  const num = pageNumber.id;

  return (
    <tbody>
      {products
        .slice(0 + 8 * (num - 1), 8 + 8 * (num - 1))
        .map((product, index) => (
          <tr key={index}>
            <td>
              <img
                style={{ width: "80px", height: "80px" }}
                src={product.image}
                alt=""
              />
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.remainder}</td>
            <td>{product.sale}</td>
            <td>{product.category}</td>

            <td>
              <button
                className="btn "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <img
                    style={{ width: "20px", height: "20px" }}
                    src="./image/treeTseg.svg"
                    alt=""
                  /> */}
                <ThreeTseg />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <EditCanvas
                    data={product}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                </li>
                <li>
                  {/* <button onClick={() => DeleteHandler(product.id)}>
                      ustgah
                    </button> */}

                  <Button variant="white" onClick={handleShow}>
                    Устгах
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      Та {product.name} устгахдаа итгэлтэй байна уу?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Үгүй
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => (
                          DeleteHandler(product.id), handleClose()
                        )}
                      >
                        Тийм
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>
                <li>
                  <a className="dropdown-item" href="##">
                    Вебсайтаас нуух
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
