import React from "react";
import "../styles/SideBarStyle.css";

import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";
import { redirectAlert } from "../helpers/alerts";
import { end_points } from "../services/api";

import { Link } from "react-router-dom";

function SideBar() {
  const cliente = JSON.parse(getLocalStorage("cliente"));

  function logOut() {
    // 1. Limpiamos los datos de sesión local inmediatamente
    removeLocalStorage("cliente");
    removeLocalStorage("turnoCliente");

    // 2. Traemos todas las reservas actuales para poder borrarlas
    fetch(end_points.reserva)
      .then((response) => response.json())
      .then((reservas) => {
        // 3. Recorremos el array de reservas y disparamos un DELETE por cada una usando su ID
        reservas.forEach((reserva) => {
          fetch(`${end_points.reserva}/${reserva.id}`, { method: "DELETE" })
            .then(() => console.log(`Reserva ${reserva.id} eliminada`))
            .catch((error) => console.log("Error al borrar una reserva:", error));
        });
      })
      .catch((error) => console.log("Error al obtener las reservas:", error));
  }

  return (
    <nav className="sidebar-container">
      {/* Bloque Superior */}
      <div>
        <div className="sidebar-title">
          Hola 
          <span className="sidebar-host-name">{cliente}</span>
        </div>

        <div>
          <Link to="hacer-reservas/">Crear Reservas</Link>
        </div>

        <div>
          <Link to="ver-reservas/">Ver Reservas</Link>
        </div>
      </div>

      {/* Bloque Inferior: Botón de Cerrar Sesión */}
      <div>
        {/* Pasamos logOut directamente como referencia sin la función flecha innecesaria */}
        <Link to="/" onClick={logOut}>Cerrar Sesión</Link>
      </div>
    </nav>
  );
}

export default SideBar;