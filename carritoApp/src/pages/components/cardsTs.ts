import { useState } from "react";

function CardsTs() {
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    setCantidad(cantidad - 1);
  };

  function totalPrecio(precio: number, cantidad: number) {
    if (precio > 0 && cantidad > 0) {
      console.log("cantidad", precio * cantidad);
      setTotal(precio * cantidad);
    }
  }

  return {
    sumarCantidad, //funcion
    restarCantidad, //funcion
    total, //variable
    cantidad, //variable
  };
}

export default CardsTs;
