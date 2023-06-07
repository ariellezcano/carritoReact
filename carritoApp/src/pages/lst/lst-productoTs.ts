import { useState } from "react";
import CardsTs from "../components/cardsTs";
import { Producto } from "../models/index.models";

function LstProductoTs({ children }) {
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  let cantidadProd = 0;
  let totalEnviado = 0;
  
  const sumarCantidad = (index: number) => {
    cantidadProd = cantidad+1;
    setCantidad(cantidadProd);
    const arr = [...children];
    console.log("arr children", arr);
    const indice = arr.indexOf(index);
    // if (indice === -1) {
    //   indice = 0;
    // }
    console.log("el supuesto index", indice);
    const precio = arr[index].precio;
    console.log("precio", precio);
    if (index == indice) {
      console.log("igual", indice);
      if (precio > 0 && cantidadProd > 0) {
        console.log("cantidad", cantidad);
        totalEnviado = precio * cantidadProd
        setTotal(totalEnviado);
        //totalPrecio(precio, cantidad);
      }
    }
  };

  const restarCantidad = (index: number) => {
    cantidadProd = cantidad-1;
    setCantidad(cantidadProd);
    const arr = [...children];
    console.log("arr children", arr);
    let indice = arr.indexOf(index);
    if (indice === -1) {
      indice = 0;
    }
    console.log("el supuesto index", indice);
    const precio = arr[index].precio;
    console.log("precio", precio);
    if (index == indice) {
      console.log("igual", indice);
      if(cantidadProd == 0){
        totalEnviado = 0;
        setTotal(totalEnviado)
      }
      if (precio > 0 && cantidadProd > 0) {
        if (total > 0) {
          totalEnviado = precio * cantidadProd
          setTotal(precio * cantidadProd);
        }
      }
    }
  };

  function totalPrecio(precio: number, cantidad: number) {
    if (precio > 0 && cantidad > 0) {
      console.log("precio enviado", precio * cantidad);
      setTotal(precio * cantidad);
    }
  }

  return {
    total,
    cantidad,
    sumarCantidad,
    restarCantidad,
  };
}

export default LstProductoTs;
