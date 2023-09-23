import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import CreateProduct from './Pages/CreateProduct/CreateProduct'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import LoginPage from './Pages/Login/Login'
import PrivateRoute from './Layout/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Private route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/create-product" index element={<CreateProduct />} />
          <Route path="/product/:index" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
