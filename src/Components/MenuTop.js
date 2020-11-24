import React from "react"
import "./MenuTop.css"


const MenuTop = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <h1> OPEN UX</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Projetos</li>
      <li className="navbar--link-item">Sobre</li>
    </ul>
  </nav>
)
export default MenuTop