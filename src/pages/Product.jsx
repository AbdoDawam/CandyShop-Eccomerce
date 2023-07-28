import { useParams } from 'react-router-dom'
import { sweets } from '../cartItems'
import { useEffect, useState } from 'react'
import { addToCart } from '../features/CartSlice'
import { useDispatch } from 'react-redux'
const Product = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    const sweet = sweets.find((item) => item.id === Number(id))
    setItem(sweet)
  }, [id])

  if (!item) {
    return (
      <h1 className="font-kurale text-6xl my-20 text-primary ml-20">
        Loading...
      </h1>
    )
  }

  return (
    <div className="flex flex-col justify-center gap-5 lg:flex-row font-kurale px-5 sm:px-[12rem] my-20 items-center ">
      <img src={item.image} alt={item.title} className="w-fit h-fit" />
      <div className="text flex flex-col gap-5">
        <h1 className="text-4xl text-primary">{item.title}</h1>
        <h1 className="text-xl text-thirdly">{item.price} EGP</h1>
        <p className="text-[#A26F45]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit
          sapiente atque, animi maiores eligendi fuga ex provident voluptatibus
          iure minus odio eum libero obcaecati minima commodi voluptatum
          architecto cumque.
        </p>
        <button
          className="checkout-btn font-kurale w-fit mt-3"
          onClick={() => dispatch(addToCart({ ...item }))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}
export default Product
