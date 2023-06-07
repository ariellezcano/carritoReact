import AbmProducto from "./pages/frm-abm/abm-producto.tsx";
import "./assets/index.css";
import LstProducto from "./pages/lst/lst-producto.tsx";
import AppTs from "./App.ts";

function App() {
  
  const {agregarItem,eliminarItem,items} = AppTs();

  return (
    <div className="AppContenedor">
      <div className="columna1">
        <AbmProducto onAdd={agregarItem} items={items} />
      </div>
      <div className="columna2">
        <LstProducto eliminarItem={eliminarItem}>{items}</LstProducto>
      </div>
    </div>
  );
}

export default App;
