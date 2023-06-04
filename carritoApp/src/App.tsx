import AbmProducto from "./pages/frm-abm/abm-producto.tsx";
import LstProducto from "./pages/lst/lst-producto.tsx";
import "./assets/index.css";
import AbmProductoTs from "./pages/frm-abm/abm-productoTs.ts";

function App() {

  const { data } = AbmProductoTs();
  console.log("app",data)
  return (
    <div className="AppContenedor">
      <div className="columna1">
        <AbmProducto/>
      </div>
      <div className="columna2">
        <LstProducto data={data}/>
      </div>
    </div>
  );
}

export default App;
