import React from "react";

function Card(props) {
  return (
    <div className="col-4">
      <div className="card" >
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1>{props.titulo}</h1>
          <h4>{props.habitacion}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
