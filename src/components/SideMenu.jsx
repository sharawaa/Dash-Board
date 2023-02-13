import { useState } from "react";
import { Link} from "react-router-dom";
import "../styles/sidemenu.css"

export default function SideMenu() {
  
  const [btnState, setBtnState] = useState("")

  function handleClick(event){
    setBtnState(event.target.id)
}
  return (
    <>
      <div className="sideMenu">
        <Link
        to={"/"}
          className= {btnState==="1" ? "active": "sideBtn"}
         onClick={handleClick}
         id={1}
        >
          <img src="./image/Dashboard1.svg" alt="" /> хянах самбар
        </Link>
        <Link
        to={"/products/page/1"}
         className= {btnState==="2" ? "active": "sideBtn"}
           onClick={handleClick}
           id={2}
        >
          <img src="./image/monitor2.svg" alt="" /> Бүтээгдэхүүнүүд
        </Link>
        <Link
        to={"/orders"}
         className= {btnState==="3" ? "active": "sideBtn"}
          onClick={handleClick}
          id={3}
        >
          <img src="./image/Vector3.svg" alt="" /> Захиалгууд
        </Link>
        <Link
        to={"/users"}
         className= {btnState==="4" ? "active": "sideBtn"}
          onClick={handleClick}
          id={4}
        >
          <img src="./image/users4.svg" alt="" /> Хэрэглэгчид
        </Link>
        <Link
        to={"/moderats"}
         className= {btnState==="5" ? "active": "sideBtn"}
          onClick={handleClick}
          id={5}
        >
          <img src="./image/suitcase5.svg" alt="" /> Модератор
        </Link>
        <Link
        to={"/settings"}
         className= {btnState==="6" ? "active": "sideBtn"}
          onClick={handleClick}
          id={6}
        >
          <img src="./wrench6.svg" alt="" /> Тохиргоо
        </Link>

        <img src="" alt="" />
      </div>
    </>
  );
}

