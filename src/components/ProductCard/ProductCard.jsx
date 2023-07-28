/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import './ProductCard.css'
import { addToCart } from '../../features/CartSlice'
import { Link } from 'react-router-dom'
const ProductCard = ({ image, title, desc, price, amount, id }) => {
  const dispatch = useDispatch()
  return (
    <section className="card  font-kurale">
      <Link
        to={`/sweet/${id}`}
        className="flex flex-col items-center gap-3 mb-3"
      >
        <img src={image} alt={title} className="max-w-[180px] max-h-[150px]" />
        <h2 className="text-lg  text-primary font-semibold">{title}</h2>
        <p className="text-[#A26F45]">{desc}</p>
        <h3 className="text-thirdly font-semibold">{price} EGP</h3>
      </Link>
      <button
        onClick={() => dispatch(addToCart({ image, title, price, amount, id }))}
        className="add border-2 border-thirdly px-3 py-1 rounded-full w-full text-thirdly mt-2"
      >
        Add To Cart
      </button>
    </section>
  )
}
export default ProductCard
