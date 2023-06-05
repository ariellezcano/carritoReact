import "./cards.css";

function Cards({ children }) {
  return (
    <div className="contenedor">
      {children?.map((elemento: any, index: number) => (
        <div className="col" key={index}>
          <p>
            {" "}
            <b> {elemento.nombre} </b>
          </p>
          <p>
            {" "}
            <b>{elemento.descripcion} </b>
          </p>
          <p>
            <b>${elemento.precio}</b>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
