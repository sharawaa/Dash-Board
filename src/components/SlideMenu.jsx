import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/slidemenu.css"




export default function SlideMenu() {
    const navigate = useNavigate();

  return <div className="slidemenu">
    <button  onClick={()=>{navigate("/")}}>Home</button>
    <button onClick={()=>{navigate("/login")}}>Login</button>
    <button onClick={()=>{navigate("/users")}}>Users</button>
    <button onClick={()=>{navigate("/products")}}>Products</button>
  </div>;
}
