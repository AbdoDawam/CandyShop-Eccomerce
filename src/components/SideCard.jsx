import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const SideCard = ({ image, title, price, id }) => {
  return (
    <div className="flex font-kurale items-center">
      <Link to={`/sweet/${id}`} className="flex font-kurale items-center">
        <img src={image} alt={title} className="w-[7rem]" />
        <div className="text text-md flex flex-col gap-2 text-primary text-center">
          <p>{title}</p>
          <p className="text-[#A26F45] text-lg">{price} EGP</p>
        </div>
      </Link>
    </div>
  )
}
export default SideCard
