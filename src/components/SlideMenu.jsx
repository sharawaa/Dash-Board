import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/slidemenu.css"




export default function SlideMenu() {
    const navigate = useNavigate();

  return <div className="slidemenu">
    <button  onClick={()=>{navigate("/")}}>хянах самбар</button>
    <button onClick={()=>{navigate("/Бүтээгдэхүүнүүд")}}>Бүтээгдэхүүнүүд</button>
    <button onClick={()=>{navigate("/Захиалгууд")}}>Захиалгууд</button>
    <button onClick={()=>{navigate("/Хэрэглэгчид")}}>Хэрэглэгчид</button>
    <button onClick={()=>{navigate("/Модератор")}}>Модератор</button>
    <button onClick={()=>{navigate("/Тохиргоо")}}>Тохиргоо</button>

  </div>;
  
}
