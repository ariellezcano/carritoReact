import { useState } from "react";

function AbmProductoTs(props) {

    const { onAdd:agregarItem } = props;
    const [producto, setProducto] = useState({ nombre: "", descripcion: "", precio: "" });
  

    function onClick(evento: any) {
    evento.preventDefault();
    if (producto.nombre !== "" && producto.precio !== "") {
      agregarItem(producto);
      setProducto({ nombre: "", descripcion: "", precio: "" });
    }
    limpiar();
  }

  function onChange(evento: any) {
    const { name, value } = evento.target;
    setProducto((prevProduct) => {
      return { ...prevProduct, [name]: value };
    });
  }

  const limpiar = () => {
    // Restablecer los valores de los campos de entrada a una cadena vacía
    const inputs = document.querySelectorAll(
      'input[name="nombre"], input[name="descripcion"], input[name="precio"]'
    );
    inputs.forEach((input: any) => {
      input.value = "";
    });
  };

  return {
    onClick,
    onChange,
    producto
  };
}

export default AbmProductoTs;
