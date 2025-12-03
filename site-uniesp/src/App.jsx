import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import CustomNavbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Container className="my-4">
        <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/faculdade' element={<Faculdade />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
