import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cartSlice'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Cart from './pages/Cart/Cart'
import Home from './pages/Home'
import About from './pages/About/About'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Nav from './components/Nav/Nav'
import Product from './pages/Product'
import Products from './pages/Products'
import Footer from './components/Footer'

const App = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/sweets" element={<Products />} />
        <Route path="/sweet/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
