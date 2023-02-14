import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/user.css";
import Pagination from "../Pagination";

export default function User(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tbody>
        <tr>
          <td>{props.id.slice(0, 5)}...</td>
          <td>{props.sureName}</td>
          <td>{props.name}</td>
          <td>{props.email.slice(0, 5)}...</td>
          <td>{props.phone}</td>
          <td>{props.order}</td>
          <td>{props.date}</td>
          <td>
            <Button variant="white" onClick={handleShow}>
              <img src="./image/treeTseg.svg" alt="" />
            </Button>
          </td>
        </tr>
      </tbody>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.id}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="off-user">
            <section className="off-user-top">
              <section>
                <section>
                  <p>Овог</p>
                  <h5>{props.sureName}</h5>
                </section>
                <section>
                  <p>Утасны дугаар</p>
                  <h5>{props.phone}</h5>
                </section>
              </section>
              <section>
                <section>
                  <p>Нэр</p>
                  <h5>{props.name}</h5>
                </section>
                <section>
                  <p>И-мэйл хаяг</p>
                  <h5>{props.email}</h5>
                </section>
              </section>
            </section>

            <section className="off-user-address">
              <p>Хаяг:</p>
              <h5>address</h5>
            </section>

            <section className="off-user-history">
              <p>Захиалгын түүх(2)</p>
              <section className="off-user-history-table">table</section>
            </section>

            <section className="off-user-footer">
              <p>Нууц үг</p>
              <input type="password" />
              <button className="off-user-footer-button">ХАДГАЛАХ</button>
            </section>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
