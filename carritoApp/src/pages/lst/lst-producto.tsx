import Cards from "../components/cards";
import "./lst-producto.css";
import LstProductoTs from "./lst-productoTs";

function LstProducto(props) {
  const { children } = props;
  
  const {
    cantidad,
    cantidadProdSum,
    cantidadProdRest,
  } = LstProductoTs();

  return (
    <div className="Lst">
      <h1>Listado de Productos</h1>
      <div className="contenedor">
        <Cards
          children={children}
          cantidad={cantidad}
          cantidadProdSum = {cantidadProdSum}
          cantidadProdRest = {cantidadProdRest}
        />
      </div>
    </div>
  );
}

export default LstProducto;
