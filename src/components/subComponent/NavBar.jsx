import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/navbar.css"

export default function NavBar() {
  return <div>

<div className="header">
  <nav>
       <ul>
        <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      
       </ul>
      </nav>
    </div>
  </div>;
}
