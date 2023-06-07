import { useState } from "react";

function LstProductoTs({ children }) {
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  let cantidadProd = 0;
  let totalEnviado = 0;

  const sumarCantidad = (index: number) => {
    cantidadProd = cantidad + 1;
    setCantidad(cantidadProd);
    const arr = [...children];
    const indice = arr.indexOf(arr[index]) === index;
    if (indice) {
      const precio = arr[index].precio;
      if (precio > 0 && cantidadProd > 0) {
        totalEnviado = precio * cantidadProd;
        setTotal(totalEnviado);
      }
    }
  };

  const restarCantidad = (index: number) => {
    cantidadProd = cantidad - 1;
    setCantidad(cantidadProd);
    const arr = [...children];
    const indice = arr.indexOf(arr[index]) === index;
    if (indice) {
      const precio = arr[index].precio;
      if (cantidadProd == 0) {
        totalEnviado = 0;
        setTotal(totalEnviado);
      }
      if (precio > 0 && cantidadProd > 0) {
        if (total > 0) {
          totalEnviado = precio * cantidadProd;
          setTotal(precio * cantidadProd);
        }
      }
    }
  };


  return {
    total,
    cantidad,
    sumarCantidad,
    restarCantidad,
  };
}

export default LstProductoTs;
