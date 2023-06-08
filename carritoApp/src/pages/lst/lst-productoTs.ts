import { useState } from "react";

const LstProductoTs = () => {
  const [totalPrecio, setTotal] = useState(0);

  const actualizarPrecioSuma = (precio: number) => {
    setTotal(totalPrecio + precio);
  };

  const actualizarPrecioResta = (precio: number) => {
    setTotal(totalPrecio - precio);
  };

  console.log("este es el total ", totalPrecio);
  return {
    actualizarPrecioSuma,
    actualizarPrecioResta,
    totalPrecio
  };
}

export default LstProductoTs;
