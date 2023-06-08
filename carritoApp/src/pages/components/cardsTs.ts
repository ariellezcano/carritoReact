import { useState } from "react";
import LstProductoTs from "../lst/lst-productoTs";

function CardsTs() {
  const [cantidad, setCantidad] = useState(0);

  const { actualizarPrecioSuma, actualizarPrecioResta } = LstProductoTs();

  const sumarCantidad = (precio: number) => {
    setCantidad(cantidad + 1);
    actualizarPrecioSuma(precio);
  };

  const restarCantidad = (precio: number) => {
    setCantidad(cantidad - 1);
    actualizarPrecioResta(precio);
  };
  
  return {
    cantidad,
    sumarCantidad,
    restarCantidad,
  };
}

export default CardsTs;
