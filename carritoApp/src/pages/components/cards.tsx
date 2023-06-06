import { Producto } from "../models/index.models";
import "./cards.css";

function Cards({ children, cantidad, cantidadProdSum, cantidadProdRest }) {

  return (
    <div className="contenedor">
      {children?.map((elemento: Producto, index: number) => (
        <div className="col" key={index}>
          <p>
            <b>{elemento.nombre}</b>
          </p>
          <p>
            <b>{elemento.descripcion} </b>
          </p>
          <p>
            <b>${elemento.precio}</b>
          </p>
          <div className="row">
            <button type="button" onClick={cantidadProdRest}>
              -1
            </button>
            &nbsp;
            <b>{cantidad}</b>
            &nbsp;
            <button type="button" onClick={cantidadProdSum}>
              +1
            </button>
          </div>
          <div className="row">
            <b>{elemento.precio * cantidad}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
