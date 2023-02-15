import "../../styles/order.css";

import OrderOffcanvas from "./OrderOffcanvas";

export default function Order(props) {
  const { orderData } = props;
 

  return (
    <>
      <tbody>
        <tr>
          <td>{orderData.no}</td>
          <td>{orderData.date}</td>
          <td>{orderData.phone}</td>
         
          <td>{(orderData.address).slice(0,6)}..</td>
          <td>{orderData.number}</td>
         
          <td>{orderData.payment}</td>
          <td>
            status
          </td>
          <td><OrderOffcanvas orderData={orderData} /></td>
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
