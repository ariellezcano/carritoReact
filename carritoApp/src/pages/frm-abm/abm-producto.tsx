import "./abm-producto.css";
import AbmProductoTs from "./abm-productoTs";

function AbmProducto() {
  const { onSubmit, onChange } = AbmProductoTs();

  return (
    <div className="Abm">
      <form action="" onSubmit={onSubmit}>
        <h1>
          <b>Cargar Producto</b>
        </h1>
        <div className="campo">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
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
            onChange={onChange}
          />
          <label htmlFor="">
            <b>Descripción:</b>
          </label>
        </div>
        <div className="campo">
          <input
            className="form-control"
            id="precio"
            name="precio"
            type="text"
            onChange={onChange}
          />
          <label htmlFor="">
            <b>Precio:</b>
          </label>
        </div>
        <br />
        <div id="contenedorBtn">
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AbmProducto;
