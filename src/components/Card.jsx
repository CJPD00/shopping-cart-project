import { useState } from "react"

const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleEliminar }) => {

    const [add, setadd] = useState(false)

    const handleAdd = () => {

        handleAgregar()
        setadd(true)

    }

    const handleDelete = () => {

        handleEliminar()
        setadd(false)
    }

    return (

        <div className="tarjeta">

            <img src={imagen} alt={titulo} className="tarjeta-imagen" />

            <div className="tarjeta-contenido">

                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>

                {
                    add
                        ? <button
                            type="button"
                            className="boton-quitar"
                            onClick={()=>handleDelete()}>Eliminar del carrito</button>
                        : <button
                            type="button"
                            className="boton-agregar"
                            onClick={()=>handleAdd()}>Agregar al carrito</button>
                }

            </div>

        </div>

    )
}

export default Card
