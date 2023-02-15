import "../styles/users.css";

import User from "../components/mainComponents/User";
export default function Users(prop) {
  const { users } = prop;
  return (
    <div className="users-container">
      <div className="users">
        <section className="users-title">
          <p className="users-title-p">Хэрэглэгчид</p>
        </section>

        <section className="users-head">
          <div className="btn-group users-head-button">
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
            type="text"
            placeholder="search"
            className="users-head-input"
          />
        </section>

        <section>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Овог</th>
                <th scope="col">Нэр</th>
                <th scope="col">И-мэйл хаяг</th>
                <th scope="col">Утас</th>
                <th scope="col">Захиалга</th>
                <th scope="col">Огноо</th>
              </tr>
            </thead>
            {users &&
              users.map((uni, index) => <User key={index} data={uni} />)}
          </table>
        </section>
      </div>
    </div>
  );
}
