import AbmProducto from "./pages/frm-abm/abm-producto.tsx";
import "./assets/index.css";
import LstProducto from "./pages/lst/lst-producto.tsx";
import AppTs from "./App.ts";

function App() {
  
  const {agregarItem,items} = AppTs();
  

  return (
    <div className="AppContenedor">
      <div className="columna1">
        <AbmProducto onAdd={agregarItem} />
      </div>
      <div className="columna2">
        <LstProducto>{items}</LstProducto>
      </div>
    </div>
  );
}

export default App;
