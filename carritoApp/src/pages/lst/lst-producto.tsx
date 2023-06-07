import Cards from "../components/cards";
import { Producto } from "../models/index.models";
import "./lst-producto.css";
import LstProductoTs from "./lst-productoTs";

function LstProducto(props) {
  const { children } = props;

  const { total } = LstProductoTs();

  return (
    <div className="Lst">
      <h1>Listado de Productos &nbsp;{total}</h1>
      <div className="contenedor">
        <Cards children={children} />
      </div>
    </div>
  );
}

export default LstProducto;
