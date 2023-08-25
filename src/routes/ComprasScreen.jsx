
import Card from "../components/Card"
import { useContext } from "react"
import { ProductosContext } from "../contexts/ProductosContext"

const ComprasScreen = () => {

    const { productos } = useContext(ProductosContext)

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
                ></Card>

            ))}
        </div>
    )
}

export default ComprasScreen
