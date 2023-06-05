import { useState } from "react";

function AppTs() {
  const [items, setItems] = useState<Producto[]>([]);

  interface Producto {
    nombre: "";
    descripcion: "";
    precio: "";
  }

  function agregarItem(item: Producto) {
    console.log("soy el item", item);
    setItems([...items, item]);
  }

  function deleteItem(id: any) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return {
    items,
    agregarItem
  };
}

export default AppTs;
