import { Producto } from "../models/index.models";
import "./cards.css";

function Cards({ children, sumarCantidad, restarCantidad, cantidad }) {

  return (
    <div className="contenedor">
      {children?.map((elemento: Producto, index: number) => (
        <div className="col" key={index}>
          <p>
            <b>{elemento.nombre}</b>
          </p>
          <p>
            <b>{elemento.descripcion}</b>
          </p>
          <p>
            <b>${elemento.precio}</b>
          </p>
          <div className="row">
            {cantidad > 0 ? (
              <button type="button" onClick={()=>restarCantidad(index)}>
                -1
              </button>
            ) : (
              <button type="button" disabled>
                -1
              </button>
            )}
            &nbsp;
            <b>{cantidad}</b>
            &nbsp;
            <button type="button" onClick={()=>sumarCantidad(index)}>
              +1
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
