import React from "react";
import "../styles/CardStyle.css";
import { end_points } from "../services/api";
import { Link } from "react-router-dom";

function Card({ data, onUpdate }) {
  function deleteReserva(id) {
    fetch(end_points.reserva + "/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((resultado) => {
        console.log("Eliminado:", resultado);
        onUpdate();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="card-popart">
      <div id="circleform"></div>
      <div id="introform"></div>

      <div id="middleform">
        <p>Fecha: {data.fechaHora}</p>
        <p>Personas: {data.cantidadPersonas}</p>
      </div>

      <div id="endform-cards">
        <Link
          to="/dashboard/hacer-reservas"
          state={{ reservaAEditar: data }}
          className="btn-actualizar"
        >
          Editar
        </Link>
        <button className="btn-eliminar" onClick={() => deleteReserva(data.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Card;