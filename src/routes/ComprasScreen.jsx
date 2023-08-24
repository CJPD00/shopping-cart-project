
import { useState, useEffect } from "react"
import Card from "../components/Card"

const ComprasScreen = () => {

    const [productos, setproductos] = useState([])

    const getProductos = async () => {

        const response = await fetch('https://fakestoreapi.com/products/')
        const data = await response.json()
        setproductos(data)

    }

    useEffect(() => {

        getProductos()

    }, [])


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
