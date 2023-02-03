import axios from "axios";
import { useParams } from "react-router-dom";
import ThreeTseg from "../icon/ThreeTseg";
import EditCanvas from "./EditCanvas";

export default function Product(prop) {
  const { products } = prop;
  const pageNumber = useParams();
  function DeleteHandler(id) {
    axios.delete(`http://localhost:2022/products/${id}`);
  }
  const num = pageNumber.id;

  return (
    <tbody>
      {products &&
        products
          .slice(0 + 8 * (num - 1), 8 + 8 * (num - 1))
          .map((product, index) => (
            <tr>
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
                    <EditCanvas data={product} />
                  </li>
                  <li>
                    <button onClick={() => DeleteHandler(product.id)}>
                      ustgah
                    </button>
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
