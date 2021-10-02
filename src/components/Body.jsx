import React from "react";

function Body(props) {
  return (
    <>
      <section>
        <div className="banner">
          <img src="../images/SLIDER.png" alt="slider" />
        </div>

        <div className="textoBanner">
          <h3>MARCA TU</h3>
          <h1>ESTILO PROPIO</h1>
        </div>

        <div className="container medio">
          <div className="iconoSillon col-6">
            <img src="../images/ICONO_sillon.png" alt="icono sillon" />
          </div>

          <div className="nosotros col-6">
            <h1>Nosotros</h1>
            <p>
              Nos dedidamos al diseño y recontrucción de muebles a pedido y a tu
              gusto, para que sean únicos, inrrepetibles y funcionales. Nuestros
              diseños nacen de la imaginación y a pasión que sentimos al
              crearlos. Buscamos generar piezas únicas en tu espacio,
              priorizando sobre todo el confort. Trabajamos muebles con espejos,
              con pintura glitter y con resina epóxica.
            </p>
          </div>
        </div>

        <div className="banner2">
          <img src="../images/BANNER_sillon.png" alt="banner sillon" />
          <h1>NOVEDOSOS Y BRILLANTES</h1>
        </div>
      </section>
    </>
  );
}

export default Body;
