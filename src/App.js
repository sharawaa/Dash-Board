import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";

import Footer from "./components/Footer"
import SlideMenu from "./components/SlideMenu";
import Products from "./pages/Products";
import Users from "./pages/Users";


function App() {
  return (
    <div className="app">
      <Header />
        <div className="main">
          
          <SlideMenu />
          
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />}/>
          </Routes>

        </div>
      <Footer />
    </div>
  );
}

export default App;
