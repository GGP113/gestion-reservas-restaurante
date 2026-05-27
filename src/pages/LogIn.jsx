import React from "react";
import "../styles/LogInStyle.css";
import { useState, useEffect } from "react";
import { saveLocalStorage , getLocalStorage} from "../helpers/local-storage";
import { useNavigate } from "react-router-dom";
import { alertaGeneral } from "../helpers/alerts";
import { Link } from "react-router-dom";

function LogIn() {
  let [userCliente, setUserCliente] = useState("");
  let [turnoCliente, setTurnoCliente] = useState("");

  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue locamente

    if (userCliente.trim() === "" || turnoCliente === "") {
    
    // Si falta algo, disparamos la alerta y lo frenamos en seco
    alertaGeneral("Error", "Nombre o Turno vacío", "error");
    
  } else {
    
    saveLocalStorage("cliente", userCliente);
    saveLocalStorage("turnoCliente", turnoCliente);

    console.log("Guardado con éxito:", userCliente, turnoCliente);

    // 3. PASAMOS AL PANEL
    navigate("/dashboard/hacer-reservas/");
  }

    
  };

  return (
    <div className="login-container"  >
      <form className="form" onSubmit={manejarEnvio}>

        
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
            
            onChange={(e) => {
              setUserCliente(e.target.value);
            }}
          />

          <p>Turno</p>
          {/* Aquí le pusimos la clase nueva que creamos en el CSS */}
          <select
            className="select-turno"
            
            onChange={(e) => {
              setTurnoCliente(e.target.value);
            }}
          >
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
