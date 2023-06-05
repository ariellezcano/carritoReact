import Cards from "../components/cards";
import "./lst-producto.css";

function LstProducto(props) {
  const { children } = props;
  return (
    <div className="Lst">
      <h1>Listado de Productos</h1>
      <div className="contenedor">
          <Cards children={children} />
      </div>
    </div>
  );
}

export default LstProducto;
