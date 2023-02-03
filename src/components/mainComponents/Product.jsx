import axios from "axios";
import EditCanvas from "./EditCanvas";

export default function Product(props) {
  const data = props.data;

  function DeleteHandler(id) {
    axios.delete(`http://localhost:2022/products/${id}`);
  }

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

        <td>
          <button
            className="btn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="./image/treeTseg.svg" alt="" />
          </button>
          <ul className="dropdown-menu">
            <li>
              <EditCanvas data={data} />
            </li>
            <li>
              <button onClick={() => DeleteHandler(data.id)}>ustgah</button>
            </li>
            <li>
              <a className="dropdown-item" href="##">
                Вебсайтаас нуух
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  );
}
