// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/slidemenu.css"




// export default function SlideMenu() {
//     const navigate = useNavigate();

//   return <div className="slidemenu">
//     <button  onClick={()=>{navigate("/")}}>хянах самбар</button>
//     <button onClick={()=>{navigate("/Бүтээгдэхүүнүүд")}}>Бүтээгдэхүүнүүд</button>
//     <button onClick={()=>{navigate("/Захиалгууд")}}>Захиалгууд</button>
//     <button onClick={()=>{navigate("/Хэрэглэгчид")}}>Хэрэглэгчид</button>
//     <button onClick={()=>{navigate("/Модератор")}}>Модератор</button>
//     <button onClick={()=>{navigate("/Тохиргоо")}}>Тохиргоо</button>

//   </div>;sideBtn className="sideBtn"
  
// }
import { useNavigate } from "react-router-dom";
import "../styles/sidemenu.css"

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sideMenu">
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="./image/Dashboard1.svg" alt="" /> хянах самбар
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/Бүтээгдэхүүнүүд");
          }}
        >
          <img src="./image/monitor2.svg" alt="" /> Бүтээгдэхүүнүүд
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/Захиалгууд");
          }}
        >
          <img src="./image/Vector3.svg" alt="" /> Захиалгууд
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/Хэрэглэгчид");
          }}
        >
          <img src="./image/users4.svg" alt="" /> Хэрэглэгчид
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/Модератор");
          }}
        >
          <img src="./image/suitcase5.svg" alt="" /> Модератор
        </button>
        <button
          className="sideBtn"
          onClick={() => {
            navigate("/Тохиргоо");
          }}
        >
          <img src="./image/wrench6.svg" alt="" /> Тохиргоо
        </button>

        <img src="" alt="" />
      </div>
    </>
  );
}

