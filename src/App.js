import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Header from "./components/Header";

import Footer from "./components/Footer"
import SlideMenu from "./components/SlideMenu";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Moderator from "./pages/Moderator";
import Settings from "./pages/Settings";


function App() {
  return (
    <div className="app">
      <Header />
        <div className="main">
          
          <SlideMenu />
          
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/Бүтээгдэхүүнүүд" element={<Products />}/>
            <Route path="/Захиалгуудs" element={<Orders />} />
            <Route path="/Хэрэглэгчид" element={<Users />}/>
            <Route  path="/Модератор" element={<Moderator />} />
            <Route  path="/Тохиргоо" element={<Settings />} />

          </Routes>

        </div>
      <Footer />
    </div>
  );
}

export default App;
