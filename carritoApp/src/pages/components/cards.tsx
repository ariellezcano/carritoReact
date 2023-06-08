import { Producto } from "../models/index.models";
import "./cards.css";
import CardsTs from "./cardsTs";

function Cards({
  children,
  eliminarItem,
}) {
  const { cantidad, sumarCantidad, restarCantidad } = CardsTs();

  return (
    <div className="contenedor">
      {children?.map((elemento: any, index: number) => (
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
            <button
              type="button"
              disabled={cantidad === 0}
              onClick={() => restarCantidad(Number(elemento.precio))}
            >
              -1
            </button>
            &nbsp;
            <b>{cantidad}</b>
            &nbsp;
            <button
              type="button"
              onClick={() => sumarCantidad(Number(elemento.precio))}
            >
              +1
            </button>
          </div>
          <br />
          <div className="row">
            <button type="button" onClick={() => eliminarItem(index)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
