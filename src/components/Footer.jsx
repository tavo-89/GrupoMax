import React from "react";
import Form from "./Form";

function Footer() {
  return (
    <>
      <footer>
        <div className="pie container-fluid col-12">
          <Form/>
          <div className="contacto col-3">
            <h1>Contacto</h1>

            <ul>
              <li>
                <a href=""><i className="fas fa-phone-alt"></i>0800-000-0000</a>
              </li>
              <li>
                <a href=""><i className="fab fa-whatsapp"></i>11-00000000</a>
              </li>
              <li>
                <a href=""><i className="fas fa-map-marker-alt"></i>Lorem ipsum 555</a>
              </li>
            </ul>
          </div>

          <div className="horarios col-3">
            <h1>Horarios</h1>
            <p>Lunes a Viernes</p>
            <p>10:00 - 19:00 hs</p>
          </div>
        </div>
      </footer>
      <div className="derechos col-12">
        <h2>Todos los derechos reservados</h2>
      </div>
    </>
  );
}

export default Footer;
