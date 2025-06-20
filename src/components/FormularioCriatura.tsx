'use client';

import { useState } from 'react';

type CriaturaData = {
  nombre: string;
  tipo: string;
  nivel: string;
  entrenado: boolean;
};

type Props = {
  onSubmit: (data: CriaturaData) => void;
};

export default function FormularioCriatura({ onSubmit }: Props) {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [nivel, setNivel] = useState('');
  const [entrenado, setEntrenado] = useState(false);

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ nombre, tipo, nivel, entrenado });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label>
        Tipo:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Selecciona</option>
          <option value="Dragón">Dragón</option>
          <option value="Fénix">Fénix</option>
          <option value="Golem">Golem</option>
          <option value="Grifo">Grifo</option>
          <option value="Vampiro">Vampiro</option>
        </select>
      </label>

      <label>
        Nivel:
        <input
          type="text"
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          required
        />
      </label>

      <label>
        Entrenado:
        <input
          type="checkbox"
          checked={entrenado}
          onChange={(e) => setEntrenado(e.target.checked)}
        />
      </label>

      <button type="submit">Guardar criatura</button>
    </form>
  );
}
