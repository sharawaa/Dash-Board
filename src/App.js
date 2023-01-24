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


function App() {
  return (
    <div className="app">
      <Header />
        <div className="main">
          
          <SideMenu />
          
          <Routes>
            <Route  path="/" element={<Control />} />
            <Route path="/Бүтээгдэхүүнүүд" element={<Products />}/>
            <Route path="/Захиалгууд" element={<Orders />} />
            <Route path="/Хэрэглэгчид" element={<Users />}/>
            <Route  path="/Модератор" element={<Moderators />} />
            <Route  path="/Тохиргоо" element={<Settings />} />

          </Routes>

        </div>
      
    </div>
  );
}

export default App;
