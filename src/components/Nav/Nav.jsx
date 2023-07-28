import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Nav.css'
const Nav = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav className="py-8 pb-6 px-14 sm:px-20 bg-secondary">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl text-center text-primary hidden sm:block">
          Call Us: <br /> 0123456789
        </h1>
        <Link to="/" className="text-2xl sm:text-3xl text-primary">
          CandyShop
        </Link>
        <Link to="/cart" className="relative text-primary text-xl sm:text-2xl ">
          <div className="badge absolute top-[-20px] right-[-15px]">
            {amount}
          </div>
          <h1>Cart</h1>
        </Link>
      </div>
      <ul className="flex gap-10 text-lg sm:text-xl justify-center text-thirdly">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sweets">Sweets</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
