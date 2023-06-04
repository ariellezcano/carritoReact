import { useState } from "react";

function AbmProductoTs() {
  let valor = "";

  const objeto = {
    nombre: "",
    descripcion: "",
    precio: "",
  };

  const [data, setData] = useState<
    { nombre: string; descripcion: string; precio: string }[]
  >([]);

  function onSubmit(evento: any) {
    evento.preventDefault();
    const nuevoObjeto = { ...objeto }; // Crear una nueva instancia del objeto
    setData((prevData) => [...prevData, nuevoObjeto]);
    limpiar()
  }

  function onChange(evento: any) {
    const input = evento.target;
    if (input.name === "nombre") {
      valor = evento.target.value;
      objeto.nombre = valor;
    } else if (input.name === "descripcion") {
      valor = evento.target.value;
      objeto.descripcion = valor;
    } else if (input.name === "precio") {
      valor = evento.target.value;
      objeto.precio = valor;
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

  console.log("data",data)
  return { onSubmit, onChange, data };
}

export default AbmProductoTs;
