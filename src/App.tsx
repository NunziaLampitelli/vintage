import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products'
import Shirts from './pages/Shirts'
import Register from './pages/Register'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext' 
import ProtectedRoute from './components/ProtectedRoute'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AuthProvider>
          <FavoritesProvider>  

            <Header />

            <main className="main-content">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/shirts" element={<Shirts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>}/>
              </Routes>
            </main>

            <Footer />

          </FavoritesProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

