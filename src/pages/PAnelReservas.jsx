import React from "react";
import "../styles/LogInStyle.css";
import SideBar from "../components/SideBar";

function PAnelReservas() {
  return (
    <div className="reservas-page-container">
      {/* 1. Barra lateral fija */}
      <SideBar />

      {/* 2. Contenido principal */}
      <main className="reservas-main-content">
        <form className="form">
          <div id="circleform"></div>
          <div id="introform">
            <div id="introformbehind">
              <p>||||||||||||||||||||||||||||||||||||</p>
            </div>
          </div>

          <div id="middleform">
            <p>Fecha</p>
            <input className="input" type="text" required placeholder="" />

            <p>Turno</p>
            <input />

            <p>Cantidad de personas</p>
            <input />
          </div>

          <div id="endform">
            <button type="submit">Crear</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PAnelReservas;
