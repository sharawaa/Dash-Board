import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import SideMenu from "./components/SideMenu";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";

import Settings from "./pages/Settings";
import Control from "./pages/Control";
import Moderators from "./pages/Moderators";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState();
  const [orders, setOrder] = useState();
  const [moderators, setModerators] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:2022/products")
      .then((products) => setProducts(products.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2022/orders")
      .then((orders) => setOrder(orders.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2022/moderators")
      .then((moderators) => setModerators(moderators.data));
  });
  useEffect(() => {
    axios
      .get("http://localhost:2022/users")
      .then((users) => setUsers(users.data));
  });

  return (
    <div className="app">
      <Header />
      <div className="main">
        <SideMenu />

        <Routes>
          <Route path="/" element={<Control />} />

          <Route
            path="/Бүтээгдэхүүнүүд"
            element={<Products products={products} />}
          />
          <Route path="/Захиалгууд" element={<Orders orders={orders} />} />
          <Route path="/Хэрэглэгчид" element={<Users users={users} />} />
          <Route
            path="/Модератор"
            element={<Moderators moderators={moderators} />}
          />
          <Route path="/Тохиргоо" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
