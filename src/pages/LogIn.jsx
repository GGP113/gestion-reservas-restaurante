import React from "react";
import "../styles/LogInStyle.css";
import { useState, useEffect } from "react";

function LogIn() {


  let [userCliente, setUserCliente] = useState("");
  let [passwordEstudiante, setPasswordEstudiante] = useState("");
  return (

    <div className="login-container">
      
      <form className="form">
        <div id="circleform"></div>
        <div id="introform">
          <p>Welcome back!</p>
          <div id="introformbehind">
            <p>||||||||||||||||||||||||||||||||||||</p>
          </div>
        </div>

        <div id="middleform">
          <p>Nombre Completo</p>
          <input
            className="input"
            type="text"
            placeholder="Ej: Juan Pérez"
            required
          />

          <p>Turno</p>
          {/* Aquí le pusimos la clase nueva que creamos en el CSS */}
          <select className="select-turno" required>
            <option value="">-- Selecciona un turno --</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>
          </select>
        </div>

        <div id="endform">
          <button type="submit">Haz tu reserva!</button>
        </div>
      </form>

    </div>
    
  );
}

export default LogIn;
