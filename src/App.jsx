import './App.css'
import Header from './shared/Header'
import Home from './pages/Home'

import { Routes, Route } from 'react-router'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/debts" element={<Debts />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/allocations" element={<Allocations />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
