/* eslint-disable no-prototype-builtins */
import { sweets } from './../cartItems'
import { Link } from 'react-router-dom'
// icons
import { CiLinkedin } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'

// Images
import sweet from '../assets/sweets.jpg'

// Components
import ProductCard from '../components/ProductCard/ProductCard'
import SideCard from '../components/SideCard'
import { useState } from 'react'

const countCategories = (sweets) => {
  const categoryNumber = {}

  sweets.forEach((sweet) => {
    if (sweet.hasOwnProperty('category')) {
      const category = sweet.category
      categoryNumber[category] = (categoryNumber[category] || 0) + 1
    }
  })

  return categoryNumber
}

const categoryCounts = countCategories(sweets)
const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([])

  // Handle checkbox click
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      // If category is already selected, remove it
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      )
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length === 0
      ? sweets // If no categories selected, show all products
      : sweets.filter((product) =>
          selectedCategories.includes(product.category)
        )

  return (
    <section className="sweets-page">
      <div className="links-guide flex justify-center items-center relative">
        <p className="absolute text-white text-2xl sm:text-4xl">
          <Link to="/">Home</Link> /
          <span className="text-secondary">Sweets</span>
        </p>
        <img src={sweet} alt="" className="max-w-full" />
      </div>
      <div className="catagories md:hidden flex gap-5 p-5 justify-center items-center flex-wrap text-thirdly">
        <p className="text-2xl text-primary">Catagories</p>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <div className="font-kurale" key={category}>
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            <label htmlFor={category} className="ml-2">
              {category} ({count})
            </label>
          </div>
        ))}
      </div>
      <div className="content flex my-10 px-10">
        <div className="sweets flex flex-col flex-[70%] items-center ">
          <div className="special-heading">Sweets</div>
          <div className="sweets-products flex flex-wrap justify-center items-end gap-16 px-5 my-5">
            {filteredProducts.map((sweet) => {
              return <ProductCard key={sweet.id} {...sweet} />
            })}
          </div>
        </div>
        <div className="side h-fit pb-5 hidden md:flex flex-col gap-10 flex-[30%] border-l-2 border-primary pl-5 ">
          <div className="popular flex flex-col gap-5 text-primary">
            <p className="text-2xl">Popular Sweets...</p>
            {sweets.slice(0, 3).map((sweet) => {
              return <SideCard key={sweet.id} {...sweet} />
            })}
          </div>
          <div className="catagories flex flex-col gap-5 text-thirdly">
            <p className="text-2xl text-primary">Catagories</p>
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div className="font-kurale" key={category}>
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                <label htmlFor={category} className="ml-2">
                  {category} ({count})
                </label>
              </div>
            ))}
          </div>
          <div className="follow text-primary mb-10">
            <p className="text-2xl">Follow Us</p>
            <div className="links text-xl flex gap-3 mt-3 items-center">
              <a href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215">
                <CiLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/AbdoDawam">
                <BsGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Products
