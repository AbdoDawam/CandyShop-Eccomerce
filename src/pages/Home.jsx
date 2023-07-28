import { Link } from 'react-router-dom'
import { sweets, why } from '../cartItems'
// Icons
import { BsChevronDown } from 'react-icons/bs'

// Components
import ProductCard from '../components/ProductCard/ProductCard'

// Images
import slider from '../assets/slider.jpg'
import WhyCard from '../components/WhyCard'

const Home = () => {
  return (
    <section className="home">
      <div className="slider">
        <img src={slider} alt="Ice Cream Image" className="max-w-full" />
      </div>
      <div className="products my-16 flex items-center flex-col">
        <h1 className="special-heading">Latest Sweets</h1>
        <div className="products-hero flex gap-16 flex-wrap items-end justify-center my-10">
          {sweets.slice(sweets.length - 4, sweets.lenght).map((sweet, i) => {
            return <ProductCard key={i} {...sweet} />
          })}
        </div>
        <Link to="/sweets">
          <div className="more flex flex-col justify-center items-center text-lg text-primary mt-10">
            <p>More Sweets</p>
            <BsChevronDown className="text-xl" />
          </div>
        </Link>
        <hr className="divider my-10 h-[3px] bg-primary w-[15rem]  sm:w-[35rem] rounded-full" />
      </div>
      <section className="why flex my-10 flex-col items-center">
        <h1 className="special-heading">Why Us</h1>
        <div className="why-hero flex gap-20 flex-wrap justify-center my-16">
          {why.map((item, i) => {
            return <WhyCard key={i} {...item} />
          })}
        </div>
      </section>
    </section>
  )
}
export default Home
