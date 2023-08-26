
import Card from "../components/Card"
import { useContext } from "react"
import { ProductosContext } from "../contexts/ProductosContext"
import { CarritoContext } from "../contexts/CarritoContext"

const ComprasScreen = () => {

    const { productos } = useContext(ProductosContext)
    const { lista,agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar=(compra)=>{

        agregarCompra(compra)

    }

    const handleAumentar=()=>{
        
    }

    const handleDisminuir=()=>{
        
    }

    const handleEliminar=(id)=>{

        eliminarCompra(id)
        
    }

    return (
        <div>
            <h1>Compras:</h1>
            <hr />

            {productos.map(prod => (
                <Card
                    key={prod.id}
                    imagen={prod.image}
                    titulo={prod.title}
                    descripcion={prod.description}
                    precio={prod.price}
                    handleAgregar={()=>handleAgregar(prod)}
                    handleEliminar={()=>handleEliminar(prod.id)}
                ></Card>

            ))}
        </div>
    )
}

export default ComprasScreen
