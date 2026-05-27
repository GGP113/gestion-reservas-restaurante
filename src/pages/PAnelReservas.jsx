import React from "react";
import "../styles/HacerReservaStyle.css";
import SideBar from "../components/SideBar";

import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";
import { end_points } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

function PAnelReservas() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const turnoCliente = JSON.parse(getLocalStorage("turnoCliente"));
  const reservaAEditar = location.state?.reservaAEditar;

  function createReserva(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    const url = reservaAEditar ? `${end_points.reserva}/${reservaAEditar.id}` : end_points.reserva;
    const metodo = reservaAEditar ? "PUT" : "POST";

    fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.ok) {
        navigate("/dashboard/ver-reservas");
      }
    })
    .catch((error) => console.log(error));
  }

  return (
    <div className="login-container">
         <form className="form-crear-reserva" onSubmit={createReserva}>
          <div id="circleform"></div>
          <div id="introform">
            <div id="introformbehind">
              <p>||||||||||||||||||||||||||||||||||||</p>
            </div>
          </div>

          <div id="middleform">
            <p>Turno: {turnoCliente}</p>

            <p>Fecha</p>
            <input 
              className="input" 
              type="date" 
              required 
              name="fechaHora" 
              defaultValue={reservaAEditar?.fechaHora || ""} 
            />

            <p>Cantidad de personas</p>
            <input
              className="input"
              type="number"
              min="1"
              required
              name="cantidadPersonas"
              defaultValue={reservaAEditar?.cantidadPersonas || ""}
            />
          </div>

          <div id="endform">
            <button type="submit">
              {reservaAEditar ? "Guardar" : "Crear"}
            </button>
          </div>
        </form>
    </div>
  );
}

export default PAnelReservas;