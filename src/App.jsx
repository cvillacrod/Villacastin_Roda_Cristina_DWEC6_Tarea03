import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom"
import Home from "./home.jsx"
import About from "./about.jsx"
import Cocktail from "./cocktail.jsx"
import Error from "./error.jsx"
import { Navigate } from 'react-router-dom';


function App() {
//rutas que se van a utilizar
  return (
    <div className="Aplicacion">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/cocktail/:idDrink" element={<Cocktail />} />
      <Route path="/error" element={<Error />} />
      {/*si se mete a mano una direccion incorrecta */}
      <Route path="*" element={<Navigate to="/error" />} />
      
    </Routes>
  </div>
  )
}

export default App
