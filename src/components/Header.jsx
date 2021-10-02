import React from "react";


function Header() {
  return (
    <>
      <nav className="navbar">
        <img src="../images/LOGO.png" alt="logo" />
        <div className="btnMenu">
          <a href="#body">INICIO</a>
          <a href="#card">PRODUCTOS</a>
          <a href="#footer">CONTACTO</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
