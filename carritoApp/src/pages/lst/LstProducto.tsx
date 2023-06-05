import "./lst-producto.css";

function LstProducto(props) {

  const { children } = props;
  return (
    <div className="contenedor">
      <h1>Listado de Productos</h1>
      {children?.map((elemento: any, index: number) => (
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
