import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Formula1 from './pages/Formula1'
import FormulaE from './pages/FormulaE'
import MotoGP from './pages/MotoGP'
import WorldSBK from './pages/WorldSBK'
import IndyCar from './pages/IndyCar'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/formula1" element={<Formula1 />} />
            <Route path="/formulae" element={<FormulaE />} />
            <Route path="/motogp" element={<MotoGP />} />
            <Route path="/worldsbk" element={<WorldSBK />} />
            <Route path="/indycar" element={<IndyCar />} />
          </Routes>
        }
      />
    </>
  )
}

export default App