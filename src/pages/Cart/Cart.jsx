import './Cart.css'
// import { Link } from 'react-router-dom'
// Images
// import sweets from '../assets/sweets.jpg'
import RowData from '../../components/RowData'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from '../../features/cartSlice'
import { useEffect } from 'react'

const Cart = () => {
  const { cartItems, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <section className="cart ">
      {/* <div className="links-guide flex justify-center items-center relative">
        <p className="absolute text-white text-2xl sm:text-4xl">
          <Link to="/">Home</Link> /<span className="text-secondary">Cart</span>
        </p>
        <img src={sweets} alt="" className="max-w-full" />
      </div> */}
      <div className="table-cart flex justify-center">
        {cartItems.length < 1 ? (
          <h1 className="font-kurale text-2xl sm:text-6xl my-20 text-primary">
            The Cart Was Empty
          </h1>
        ) : (
          <div className="my-10 flex flex-col items-center">
            <div className="special-heading">Orders</div>

            <div className="scrollable-table md:max-w-[35rem] lg:max-w-[40rem]">
              <table className="my-10 w-[786px] overflow-x-auto">
                <thead className="border-b-2 border-secondary text-2xl text-primary">
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </thead>
                <tbody className="font-kurale text-lg">
                  {cartItems.map((item) => {
                    return <RowData key={item.id} {...item} />
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <div className="total px-16 my-10 text-primary flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl mb-16 ">Cart Totals</h1>
        <div className="totals flex flex-col gap-6 font-kurale text-xl sm:text-2xl w-[20rem] mb-10">
          <div className="sub flex gap-10 justify-between">
            <h1>SubTotal</h1> <p>{total} EGP</p>
          </div>
          <div className="main flex gap-10 justify-between">
            <h1>Total</h1> <p>{total ? total + 10 : total} EGP</p>
          </div>
        </div>
        <button className="checkout-btn font-kurale">
          Proceed To Checkout
        </button>
      </div>
    </section>
  )
}
export default Cart
