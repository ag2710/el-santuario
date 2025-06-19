import React from "react";

interface Props {
  conEliminar?: boolean;
}

export default function TablaCriaturas({ conEliminar = false }: Props) {
  return (
    <div>
      <p>Aquí se mostraría la tabla de criaturas mágicas.</p>
      {conEliminar && <p>(Funcionalidad de eliminar disponible)</p>}
    </div>
  );
}
