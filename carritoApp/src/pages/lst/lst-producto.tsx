function LstProducto({
  data,
}: {
  data: { nombre: string; descripcion: string; precio: string }[];
}) {
  return (
    <div className="lst">
      <h1>Lst</h1>
      {data.map((elemento: any, index: number) => (
        <div className="col" key={index}>
          <p>{elemento.nombre}</p>
          <p>{elemento.descripcion}</p>
          <p>{elemento.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default LstProducto;
