import React from "react";
import "../styles/SideBarStyle.css";

import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";
import { redirectAlert } from "../helpers/alerts";

import { Link } from "react-router-dom";

function SideBar() {
  

  return (
    <aside className="sidebar-container">
      {/* Bloque Superior */}
      <div>
        <div className="sidebar-title">
          Anfitrión:
          <span className="sidebar-host-name">[Nombre Aquí]</span>
        </div>

        {/* Botón de navegación (reutiliza el estilo de tu CSS) */}
        <div id="endform">
          <Link to="ver-reservas/">Ver Reservas</Link>
        </div>
      </div>

      {/* Bloque Inferior: Botón de Cerrar Sesión */}
      <div id="endform">
        <Link to ="/">Cerrar Sesión</Link>
      </div>
    </aside>
  );
}

export default SideBar;
