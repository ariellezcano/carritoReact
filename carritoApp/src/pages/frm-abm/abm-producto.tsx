import "./abm-producto.css";
import AbmProductoTs from "./abm-productoTs";

function AbmProducto(props) {

  const {onClick,onChange, producto} = AbmProductoTs(props);

  return (
    <div className="Abm">
      <form action="" >
        <h1>
          <b>Cargar Producto</b>
        </h1>
        <div className="campo">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={producto.nombre}
            onChange={onChange}
          />
          <label htmlFor="">
            <b>Nombre:</b>
          </label>
        </div>
        <div className="campo">
          <input
            className="form-control"
            id="descripcion"
            name="descripcion"
            type="text"
            value={producto.descripcion}
            onChange={onChange}
          />
          <label htmlFor="">
            <b>Descripción "Opcional":</b>
          </label>
        </div>
        <div className="campo">
          <input
            className="form-control"
            id="precio"
            name="precio"
            type="number"
            value={producto.precio}
            onChange={onChange}
          />
          <label htmlFor="">
            <b>Precio:</b>
          </label>
        </div>
        <br />
        <div id="contenedorBtn">
          <button onClick={onClick} className="btn btn-primary" type="button">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AbmProducto;
