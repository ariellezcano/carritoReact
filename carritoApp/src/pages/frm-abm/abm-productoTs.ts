import { useState } from "react";

function AbmProductoTs() {
  let inputNombre = "";
  let inputdescripcion = "";
  let inputprecio = "";

   const [nombre, setNombre] = useState('');
   const [descripcion, setDescripcion] = useState('');
   const [precio, setPrecio] = useState('');

  function onSubmit(evento: any) {
    evento.preventDefault();
    setNombre(inputNombre);
    setDescripcion(inputdescripcion)
    setPrecio(inputprecio)
    limpiar();
  }

  function onChange(evento: any) {
    const input = evento.target;
    if (input.name === "nombre") {
      if (evento.target.value != undefined) {
        inputNombre = evento.target.value;
      } else {
        console.log("campo requerido");
      }
    } else if (input.name === "descripcion") {
      inputdescripcion = evento.target.value;
    } else if (input.name === "precio") {
      if (evento.target.value != undefined) {
        inputprecio = evento.target.value;
      } else {
        console.log("campo requerido");
      }
    }
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

  return { onSubmit, onChange, nombre,descripcion,precio };
}

export default AbmProductoTs;
