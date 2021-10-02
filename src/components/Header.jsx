import React from "react";


function Header() {
  return (
    <>
      <nav className="navbar">
        <img src="../images/LOGO.png" alt="logo" />
        <div className="btnMenu">
          <a rel="float-shadow" class="button float-shadow nav-link" href="#body">INICIO</a>
          <a rel="float-shadow" class="button float-shadow nav-link" href="#card">PRODUCTOS</a>
          <a rel="float-shadow" class="button float-shadow nav-link" href="#footer">CONTACTO</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
