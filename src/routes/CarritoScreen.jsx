import { useContext } from "react"
import { CarritoContext } from "../contexts/CarritoContext"

const CarritoScreen = () => {

    const { lista, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const Total = () => {

        return lista.reduce((acc, prod) => acc + prod.price * prod.cantidad,0).toFixed(2)

    }

    return (

        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {lista.map(prod => (

                        <tr key={prod.id}>
                            <th>{prod.title}</th>
                            <td>{prod.price}</td>
                            <td>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => disminuirCantidad(prod.id)}>-</button>
                                <button
                                    className="btn btn-primary">{prod.cantidad}</button>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => aumentarCantidad(prod.id)}>+</button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(prod.id)}>eliminar</button>
                            </td>
                        </tr>

                    ))}

                    <th><b>TOTAL</b></th>
                    <td></td>
                    <td></td>
                    <td>${Total()}</td>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary">comprar</button>
            </div>
        </>
    )
}

export default CarritoScreen
