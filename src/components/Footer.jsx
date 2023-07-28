import { CiLinkedin } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className=" bg-secondary text-primary py-5 px-10 flex flex-wrap gap-5 justify-center lg:justify-betwee text-mdn sm:text-lg font-kurale">
      <div className="links flex justify-center items-center gap-5 sm:text-2xl">
        <a href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215">
          <CiLinkedin className="text-3xl" />
        </a>
        <a href="https://github.com/AbdoDawam">
          <BsGithub className="text-2xl" />
        </a>
      </div>
      <p>
        All Rights Reserved To <span className="text-thirdly">Candy Shop</span>©
        2023
      </p>
      <p>
        Made By{' '}
        <a
          href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215"
          className="text-thirdly"
        >
          Abdelrahman Ahmed
        </a>
      </p>
    </footer>
  )
}
export default Footer
