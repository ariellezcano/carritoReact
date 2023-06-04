import { useEffect, useState } from "react";
import AbmProductoTs from "../frm-abm/abm-productoTs";

function LstProductos() {
  
  const { nombre, descripcion, precio } = AbmProductoTs();

  class Objeto {
    nombre!: string;
    descripcion!: string;
    precio!: string;
  }

  const [lst, setLst] = useState<Objeto[]>([]);

  function insertarDatos() {
    const obj = new Objeto();
    obj.nombre = nombre;
    obj.descripcion = descripcion;
    obj.precio = precio;
    setLst((prevLst) => [...prevLst, obj]);
  }

  useEffect(() => {
    insertarDatos();
  }, []);

  return {
    lst
  };
}

export default LstProductos;
