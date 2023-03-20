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
import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();
function App() {
  const [orders, setOrder] = useState();
  const [users, setUsers] = useState();
  const [refresh, setRefresh] = useState(true);
  const [moderators, setModerators] = useState();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/product")
      .then((products) => setProducts(products.data));
  }, [refresh]);
  //git hub
  useEffect(() => {
    axios
      .get("http://localhost:2022/orders")
      .then((orders) => setOrder(orders.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2022/moderators")
      .then((moderators) => setModerators(moderators.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:2000/users")
      .then((users) => setUsers(users.data));
  }, []);
  console.log("users", users);
  return (
    <div className="app">
      <ProductContext.Provider value={{ products, setProducts, orders, users }}>
        <Header />
        <div className="main">
          <SideMenu />

          <Routes>
            <Route path="/" element={<Control />} />

            <Route
              path="/products/page/:id"
              element={
                <Products
                  // products={products}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              }
            />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route path="/users" element={<Users users={users} />} />
            <Route
              path="/moderats"
              element={<Moderators moderators={moderators} />}
            />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
