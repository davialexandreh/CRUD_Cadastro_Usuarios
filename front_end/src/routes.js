import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Usuarios from './pages/Usuários'

function Rotas() {

    return (
        < Router >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/usuarios' element={<Usuarios />} />
            </Routes>
        </ Router>)
}

export default Rotas