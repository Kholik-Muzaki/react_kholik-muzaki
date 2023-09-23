import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import CreateProduct from './Pages/CreateProduct/CreateProduct'
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import LoginPage from './Pages/LoginPage/LoginPage'
import LoginAccount from './Pages/LoginAccount/LoginAccount'
import PrivateRoute from './Layout/PrivateRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login-account" element={<LoginAccount />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/create-product" index element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
