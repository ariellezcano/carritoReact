import { useState } from "react";

function CardsTs(){

    const [sumatoriaTotalCarrito, setSumatoriaTotalCarrito] = useState(0);
    const [precioCantProducto, setPrecioCantProducto] = useState(0);

    const sumatoriaCantProd = (precio: number, cantidad: number) => setPrecioCantProducto(precio*cantidad)
    const sumatoriaTotalPrecio = () => setSumatoriaTotalCarrito(precioCantProducto+precioCantProducto)


    return{
        sumatoriaCantProd, //funcion
        sumatoriaTotalPrecio, //funcion
        sumatoriaTotalCarrito, //variable
        precioCantProducto //variable
    }
}

export default CardsTs;