
import { useState } from "react"
import { ProductosContext } from "./ProductosContext"
import { useEffect } from "react"

export const ProductosProvider = ({children}) => {

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

    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
    
  )
}
