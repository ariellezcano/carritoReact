import AbmProducto from "./pages/frm-abm/abm-producto.tsx";
import LstProducto from "./pages/lst/lst-producto.tsx";
import "./assets/index.css";
import LstProductos from "./pages/lst/lst-producto.ts";

function App() {

  const { lst } = LstProductos();

  return (
    <div className="AppContenedor">
      <div className="columna1">
        <AbmProducto/>
      </div>
      <div className="columna2">
        <LstProducto lst={lst}/>
      </div>
    </div>
  );
}

export default App;
