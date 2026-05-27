import React from "react";
import "../styles/CardStyle.css"

function Card({data}) {


  return (
    <div className="form">
      <div id="circleform"></div>
      <div id="introform"></div>

      <div id="middleform">
        <p>Fecha: {data.fechaHora}</p>
        <p>Personas: {data.cantidadPersonas}</p>
      </div>

      {/* 🌟 CORREGIDO: Nuevo contenedor para acomodar los dos botones lado a lado */}
      <div id="endform-cards">
        <button className="btn-actualizar">Actualizar</button>
        <button className="btn-eliminar">Eliminar</button>
      </div>
    </div>
  );
}

export default Card;
