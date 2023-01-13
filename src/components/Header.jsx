import React from "react";
import "../styles/header.css"
import NavBar from "./subComponent/NavBar";

export default function Header() {
  return (
    <div className="header">
      <NavBar />
    </div>
  );
}
