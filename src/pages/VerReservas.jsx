import React from "react";
import { useState, useEffect } from "react";
import { end_points } from "../services/api";
import Card from "../components/Card";
import "../styles/VerReservas.css"

function VerReservas() {
  const [reservas, setReservas] = useState([]);

  function getReservas() {
    fetch(end_points.reserva)
      .then((response) => response.json())
      .then((data) => setReservas(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getReservas();
  }, []);

  console.log(reservas);

  return (
    <div className="ver-reservas-container">
      {reservas.map((item) => (
        <Card data ={item}/>
      ))}
    </div>
  );
}

export default VerReservas;
