import './App.css'
import Header from './shared/Header'
import Dashboard from './pages/Dashboard'

import { Routes, Route } from 'react-router'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/debts" element={<Debts />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/allocations" element={<Allocations />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
