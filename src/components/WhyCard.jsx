/* eslint-disable react/prop-types */
const WhyCard = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-center font-kurale w-[15rem]">
      <img className="aspect-square w-20" src={image} alt={title} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
export default WhyCard
