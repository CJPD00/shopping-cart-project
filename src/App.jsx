import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import ComprasScreen from './routes/ComprasScreen'
import CarritoScreen from './routes/CarritoScreen'

function App() {

  return (
    <>
      <NavBar></NavBar>

      <div className='container'>
        <Routes>
          <Route path='/' element={<ComprasScreen></ComprasScreen>}></Route>
          <Route path='/carrito' element={<CarritoScreen></CarritoScreen>}></Route>
          <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
