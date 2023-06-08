import Cards from "../components/cards";
import "./lst-producto.css";
import LstProductoTs from "./lst-productoTs";

function LstProducto(props) {
  
  const { children, eliminarItem } = props;
  const { totalPrecio } = LstProductoTs();
  console.log("total lista", totalPrecio);

  return (
    <div className="Lst">
      <div className="row">
        <h1>Listado de Productos &nbsp;&nbsp;${totalPrecio}</h1>
      </div>
      <div className="contenedor">
        <Cards children={children} eliminarItem={eliminarItem} />
      </div>
    </div>
  );
}

export default LstProducto;
