import "../styles/moderator.css";
import Moderator from "../components/mainComponents/Moderator";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Moderators(prop) {
  const { moderators } = prop;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  function moderatSave(e) {
    e.preventDefault();
    let object = {
      sureName: e.target.sureName.value,
      name: e.target.name.value,
      eMail: e.target.eMail.value,
      phone: e.target.phoneNumber.value,
      id: uuidv4(),
    }
    axios
      .post("http://localhost:2022/moderators", object)
      .then((res) => console.log(res));
      //window.location.reload()
    console.log(e.target.phoneNumber.value);
  }
  return (
    <div className="moderator-container">
      <div className="moderator">
        <section className="moderator-title">
          <p className="moderator-title-p">Модераторууд</p>
        </section>

        <section className="moderator-head">
          <section>
            <Button variant="primary" onClick={handleShow}>
              Модератор нэмэх
            </Button>
          </section>
          <input
            className="moderator-head-input"
            placeholder="search"
            type="text"
          />
        </section>
        <Offcanvas show={show} placement="end" onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Модератор нэмэх</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form onSubmit={moderatSave}>
              <div className="container">
                <section className="off-moderator-top">
                  <section>
                    <section>
                      <p>Овог</p>
                      <input type="text" name="sureName" />
                    </section>
                    <section>
                      <p>Утасны дугаар</p>
                      <input type="text" name="phoneNumber" />
                    </section>
                  </section>
                  <section>
                    <section>
                      <p>Нэр</p>
                      <input type="text" name="name" />
                    </section>
                    <section>
                      <p>И-мэйл хаяг</p>
                      <input type="text" name="eMail" />
                    </section>
                  </section>
                </section>

                <section className="off-moderator-footer">
                  <p>Нууц үг</p>
                  <input type="password" name="password" />
                  <button className="off-moderator-footer-button" type="submit">
                    ХАДГАЛАХ
                  </button>
                </section>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>

        <section>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Moderator</th>
                <th scope="col">Овог</th>
                <th scope="col">Нэр</th>
                <th scope="col">И-мэйл хаяг</th>
                <th scope="col">Утас</th>
                <th scope="col">Зарсан</th>
                <th scope="col">Огноо</th>
              </tr>
            </thead>
            {moderators &&
              moderators.map((uni, index) => (
                <Moderator
                  key={index}
                  moderator={uni.moderator}
                  sureName={uni.sureName}
                  name={uni.name}
                  eMail={uni.eMail}
                  phone={uni.phone}
                  goodsSold={uni.goodsSold}
                  date={uni.date}
                  id={uni.id}
                />
              ))}
          </table>
        </section>
      </div>
    </div>
  );
}
