import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products'
import Shirts from './pages/Shirts'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/products' element={<Products />} />
            <Route path="/shirts" element={<Shirts />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App