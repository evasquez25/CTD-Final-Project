import './App.css'
import Header from './shared/Header'
import Dashboard from './pages/Dashboard'
import Bills from './pages/Bills'
import Debts from './pages/Debts'
import Allocations from './pages/Allocations'
import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router'
import { useState } from 'react'

function App() {
  const [billList, setBillList] = useState([])
  const [debtList, setDebtList] = useState([])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/debts" element={<Debts />} />
        <Route path="/allocations" element={<Allocations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
