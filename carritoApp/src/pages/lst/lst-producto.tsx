function LstProducto({lst}){

  return (
    <div className="lst">
      <h1>Listado de Productos</h1>
      {lst.map((elemento: any, index: number) => (
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
