import { useState } from "react";

function AppTs() {
  const [items, setItems] = useState<Producto[]>([]);

  interface Producto {
    nombre: "";
    descripcion: "";
    precio: "";
  }

  function agregarItem(item: Producto) {
    setItems([...items, item]);
  }

  function eliminarItem(id: any) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return {
    items,
    agregarItem,
    eliminarItem
  };
}

export default AppTs;
