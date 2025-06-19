type Props = {
  filtros: string[];
  busqueda: string;
};

const TablaCriaturas = ({ filtros, busqueda }: Props) => {
  // Aquí puedes aplicar los filtros y la búsqueda a las criaturas
  // o recibir los datos filtrados por props si lo haces desde el padre

  // Por ahora, puedes usar datos mock como en la demo:
  const criaturas = [
    { nombre: 'Abyssaloth', tipo: 'Fénix', nivel: 'IV', entrenado: true },
    { nombre: 'Luminara', tipo: 'Dragón', nivel: 'I', entrenado: true },
    { nombre: 'Velokron', tipo: 'Golem', nivel: 'II', entrenado: false },
  ];

  const filtradas = criaturas.filter((c) => {
    const coincideTipo = filtros.length === 0 || filtros.includes(c.tipo);
    const coincideBusqueda =
      c.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideTipo && coincideBusqueda;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Nivel</th>
          <th>Entrenado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filtradas.map((c, i) => (
          <tr key={i}>
            <td>{c.nombre}</td>
            <td>{c.tipo}</td>
            <td>{c.nivel}</td>
            <td>{c.entrenado ? 'Sí' : 'No'}</td>
            <td>✎</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaCriaturas;
