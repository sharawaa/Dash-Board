import { useContext } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ProductContext } from "../../App";
import "../../styles/orderOffcanvas.css"
import ThreeTseg from "../icon/ThreeTseg";

export default function OrderOffcanvas(prop) {
  const {users} = useContext(ProductContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products } = useContext(ProductContext);
  const { orderData } = prop;

  let findOrder =
  products &&
    products.filter((orderPro) => {
      return orderData.orderProducts.find((product) => {
        return product.id === orderPro.id
      });
    });
    let findStock = orderData && orderData.orderProducts.map((order)=>{
      return order.stock
    })
   
   
    
    let findUser = users && users.filter((user)=>{
      return orderData.userId===user.id
    })
   
  return (
    <>
      <button className="order-button" onClick={handleShow}>
        <ThreeTseg />
      </button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div>
            <div className="off-order-top">
              <section className="off-order-top-head">
                {" "}
                <p className="off-order-top-head-p ">Захиалсан бараа</p>
                <div>
                {findOrder.map((order, index)=>{
                  return(
                    <div key={index} className="orderProduct">
                      <h4>{order.name}</h4>
                      <img className="orderProduct-image" src={order.image}  alt="" />
                      <h6>{findStock[0]}</h6>
                      <h6>une{order.price}$</h6>
                      <h6>niit une {(order.price)*(findStock[0])}$</h6>
                    </div>
                  )
                })}
                </div>
              </section>
            </div>

            <div className="off-order-main">
              <section className="off-order-main-top">
                <section className="off-order-main-top-start">
                  <section>
                    <p>Захиалгын огноо</p>
                    <input type="text" defaultValue={orderData.date} />
                  </section>
                  <section>
                    <p>Захиалагчийн нэр</p>
                    <input type="text" defaultValue={findUser[0].userName} />
                  </section>

                  <section>
                    <p>Утасны дугаар</p>
                    <input type="text" defaultValue={findUser[0].phone}/>
                  </section>
                </section>
                <section className="off-order-main-top-end">
                  <section>
                    <p>Захиалгын статус:</p>
                    <input type="text" name="" id="" />
                  </section>
                  <section>
                    <p>И-мэйл хаяг</p>
                    <input type="text" defaultValue={findUser[0].email} />
                  </section>
                  <section>
                    <p>Нэмэлт утасны дугаар</p>
                    <input type="text" />
                  </section>
                </section>
              </section>

              <section className="off-order-main-footer">
                <p>Хүргүүлэх хаяг:</p>
                <section
                  className="orderAddress"
                >
                 <p>{orderData.address}</p> 
                </section>
              </section>
            </div>

            <div className="off-order-footer">
              <section className="off-order-footer-top">
                <p>Төлбөрийн статус:</p>
                <input type="text" />
              </section>

              <section className="off-order-footer-main">
                <section>
                  <p>Төлбөрийн сонголт</p>
                  <input type="text" />
                </section>

                <section>
                  <p>Баримт</p>
                  <input type="text" />
                </section>
              </section>

              <section className="off-order-footer-footer">
                <button className="off-order-footer-footer-button">
                  ХАДГАЛАХ
                </button>
              </section>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
