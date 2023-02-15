import "../styles/orders.css";

import Order from "../components/mainComponents/Order";
export default function Orders(prop) {
  const { orders } = prop;
  return (
    <div className="orders-container">
      <div className="orders">
        <section className="orders-title">
          <p className="orders-title-p">Захиалгууд</p>
        </section>

        <section className="orders-header container">
          <div className="btn-group orders-header-button">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Бүгд
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="##">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="##">
                  Another action
                </a>
              </li>
            </ul>
          </div>
          <input
            className="orders-header-input"
            type="text"
            placeholder="Хайх"
          />
        </section>

        <section>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Захиалга No</th>
                <th scope="col">Огноо</th>
                <th scope="col">Утас</th>
                <th scope="col">И-мэйл</th>
                <th scope="col">Хаяг</th>
                <th scope="col">Тоо</th>
                <th scope="col">Нийт дүн ₮</th>
                <th scope="col">Төлбөр</th>
                <th scope="col">Статус</th>
              </tr>
            </thead>
            {orders &&
              orders.map((unit, index) => (
                <Order key={index} orderData={unit} />
              ))}
          </table>
        </section>
      </div>
    </div>
  );
}
