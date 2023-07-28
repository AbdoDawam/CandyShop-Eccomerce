/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
// icons
import { GrClose } from 'react-icons/gr'
import { decrease, increase, removeItem } from '../features/cartSlice'

const RowData = ({ image, title, price, amount, id }) => {
  const dispatch = useDispatch()

  return (
    <tr>
      <td className="w-fit">
        <GrClose
          className="text-thirdly cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        />
      </td>
      <td>
        <img src={image} className="w-[7rem]" />
      </td>
      <td className="text-primary">{title}</td>
      <td className="text-thirdly">{price} EGP</td>
      <td className="text-primary">
        <span
          className="minus p-3 cursor-pointer"
          onClick={() => {
            amount === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id))
          }}
        >
          -
        </span>
        <span className="number mx-10 bg">{amount}</span>
        <span
          className="plus p-3 cursor-pointer"
          onClick={() => {
            dispatch(increase(id))
          }}
        >
          +
        </span>
      </td>
    </tr>
  )
}
export default RowData
