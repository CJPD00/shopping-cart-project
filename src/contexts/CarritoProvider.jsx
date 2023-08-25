
import { CarritoContext } from "./CarritoContext"
import { useReducer } from "react"

const initialState = []

const comprasReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[carrito]agregar':
            return [...state, action.payload];

        case '[carrito]aumentar':
            return state

        case '[carrito]disminuir':
            return state

        case '[carrito]eliminar':
            return state.filter(prod => prod.id !== action.payload);

        default:
            return state
    }

}

export const CarritoProvider = ({ children }) => {

    const [lista, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {

        const action = {
            type: '[carrito]agregar',
            payload: compra
        }

        dispatch(action)

    }

    const aumentarCantidad = (id) => {

        const action = {
            type: '[carrito]aumentar',
            payload: id
        }

        dispatch(action)

    }

    const disminuirCantidad = (id) => {

        const action = {
            type: '[carrito]disminuir',
            payload: id
        }

        dispatch(action)

    }

    const eliminarCompra = (id) => {

        const action = {
            type: '[carrito]eliminar',
            payload: id
        }

        dispatch(action)

    }

    return (
        <CarritoContext.Provider value={{ lista, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
