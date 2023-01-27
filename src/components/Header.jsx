 import React from "react";
 import "../styles/header.css"

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="container aHeader">
      <a href="##">
        <img src="./image/Logo.png" alt="" />
      </a>
      <section>
        <input className="aSearchInput" type="text" />
        <button className="aSearchButton">Search</button>
      </section>

      <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="##">
        <img src="./image/logout_admin.svg" alt="" />
      </a>

 <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content CloseModal container ">
            <section>
              <img src="./image/asullt.svg" alt="" />
            </section>
            <section>
              <p className="trust">Та системээс гарахдаа итгэлтэй байна уу?</p>
            </section>
            <section className="closeButtonAH">
              <button
                className="yes"
                onClick={() => {
                  navigate("/");
                }}
              >
                {" "}
                Тийм
              </button>
              <button className="no" data-bs-dismiss="modal">
                Үгүй
              </button>
            </section>
          </div>
        </div>
      </div> 
    </div>
  );
}
