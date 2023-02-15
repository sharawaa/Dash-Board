import "../../styles/order.css";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../App";
import OrderOffcanvas from "./OrderOffcanvas";

export default function Order(props) {
  const { orderData } = props;
  const { products } = useContext(ProductContext);

  return (
    <>
      <tbody>
        <tr>
          <td>{orderData.no}</td>
          <td>{orderData.date}</td>
          <td>{orderData.phone}</td>
          <td>{orderData.email}</td>
          <td>{orderData.address}</td>
          <td>{orderData.number}</td>
          <td>{orderData.totalAmount}</td>
          <td>{orderData.payment}</td>
          <td>
            <OrderOffcanvas orderData={orderData} />;
          </td>
        </tr>
      </tbody>
    </>
  );
}
//   {
//     products &&
//       products.map((product, index) => {
//         product.id === dat.id;
//       });
//   }
