export default function Product(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img
            style={{ width: "80px", height: "80px" }}
            src={props.image}
            alt=""
          />
        </td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.remainder}</td>
        <td>{props.sale}</td>
        <td>{props.category}</td>
      </tr>
    </tbody>
  );
}
