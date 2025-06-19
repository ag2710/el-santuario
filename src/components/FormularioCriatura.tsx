"use client";

import React, { useState } from "react";

export default function FormularioCriatura() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("Fénix");
  const [nivel, setNivel] = useState("");
  const [entrenada, setEntrenada] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Criatura registrada: ${nombre}, ${tipo}, nivel ${nivel}, entrenada: ${entrenada}`);
    // Aquí deberías hacer la llamada a la API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre mágico de la criatura</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />

      <label>Tipo de criatura</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="Fénix">Fénix</option>
        <option value="Dragón">Dragón</option>
        <option value="Hada">Hada</option>
      </select>

      <label>Nivel de poder</label>
      <input value={nivel} onChange={(e) => setNivel(e.target.value)} required />

      <label>¿Entrenada?</label>
      <label><input type="radio" name="entrenada" value="Sí" onChange={(e) => setEntrenada(e.target.value)} /> Sí</label>
      <label><input type="radio" name="entrenada" value="No" onChange={(e) => setEntrenada(e.target.value)} /> No</label>

      <button type="submit">Registrar criatura</button>
    </form>
  );
}
