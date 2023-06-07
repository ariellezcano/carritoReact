import { useState } from "react";
import Cards from "../components/cards";
import CardsTs from "../components/cardsTs";
//import { Producto } from "../models/index.models";
import "./lst-producto.css";
import LstProductoTs from "./lst-productoTs";

function LstProducto(props) {
  const { children, eliminarItem } = props;

  const { total, cantidad, sumarCantidad, restarCantidad } = LstProductoTs({
    children,
  });

  console.log("listado", total);
  return (
    <div className="Lst">
      <h1>Listado de Productos &nbsp;&nbsp;${total}</h1>
      <div className="contenedor">
        <Cards
          children={children}
          sumarCantidad={sumarCantidad}
          restarCantidad={restarCantidad}
          cantidad={cantidad}
          eliminarItem = {eliminarItem}
        />
      </div>
    </div>
  );
}

export default LstProducto;
