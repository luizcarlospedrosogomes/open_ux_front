import React from "react"
import "./Menu.css"


const MenuTop = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <h1> OPEN UX</h1>    
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Perfil</li>
      <li className="navbar--link-item">Sobre</li>
    </ul>
  </nav>
)
export default MenuTop