
import { CarritoContext } from "./CarritoContext"
import { useReducer } from "react"

const initialState = []

const comprasReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[carrito]agregar':
            return [...state, action.payload];

        case '[carrito]aumentar':
            return state.map(prod => {
                const cant = prod.cantidad + 1
                if (prod.id === action.payload) return { ...prod, cantidad: cant }
                return prod
            })

        case '[carrito]disminuir':
            return state.map(prod => {
                const cant = prod.cantidad - 1
                if (prod.id === action.payload && prod.cantidad > 1) return { ...prod, cantidad: cant }
                return prod
            })

        case '[carrito]eliminar':
            return state.filter(prod => prod.id !== action.payload);

        default:
            return state
    }

}

export const CarritoProvider = ({ children }) => {

    const [lista, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {

        compra.cantidad = 1

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
