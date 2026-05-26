import React from "react";
import "../styles/LogInStyle.css";
import SideBar from "../components/SideBar";

import { end_points } from "../services/api";

function PAnelReservas() {
  function createReserva(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch(end_points.reserva, {
      method: "POST",

      headers: {
        "Content-Type": "application/json", // 👈 SOLO AGREGAMOS ESTO
      },
      
      body: JSON.stringify(data),
    });
  }

  return (
     

      <form className="form" onSubmit={createReserva}>
          <div id="circleform"></div>
          <div id="introform">
            <div id="introformbehind">
              <p>||||||||||||||||||||||||||||||||||||</p>
            </div>
          </div>

          <div id="middleform">
            <p>Turno: </p>
            {/* Aquí puedes meter tu input o select de turno más adelante */}

            <p>Fecha</p>
            {/* CAMBIO AQUÍ: type="date" despliega el calendario automáticamente */}
            <input className="input" type="date" required name="fechaHora" />

            <p>Cantidad de personas</p>
            {/* Le agregué la clase "input" para que mantenga tus estilos Pop-Art */}
            <input
              className="input"
              type="number"
              min="1"
              required
              name="cantidadPersonas"
            />
          </div>

          <div id="endform">
            <button type="submit">Crear</button>
          </div>
        </form>
  );
}

export default PAnelReservas;
