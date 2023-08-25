

const CarritoScreen = () => {

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

                    <tr >
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary">comprar</button>
            </div>
        </>
    )
}

export default CarritoScreen
