import { useState } from "react"

function LstProductoTs(){

    const [cantidad, setCantidad] = useState(0);

    const cantidadProdSum = () => setCantidad(cantidad + 1)
    const cantidadProdRest = () => setCantidad(cantidad - 1)
    
    


    return {
        cantidad,
        cantidadProdSum,
        cantidadProdRest,
    }
}

export default LstProductoTs;