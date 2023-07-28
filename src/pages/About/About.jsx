// Css
import './About.css'
// images
import dawam from '../../assets/Dawam.jpeg'

// Icons
import { CiLinkedin } from 'react-icons/ci'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 justify-between px-10 sm:px-20 my-16 font-kurale ">
      <img
        src={dawam}
        alt="Abdelrahman Ahmed"
        className="w-[10rem] block lg:hidden"
      />
      <div className="txt text-center sm:text-left flex flex-col gap-5">
        <h1 className="text-3xl  text-primary">
          My Name Is <span className="text-thirdly">Abdelrahman Ahmed</span>
        </h1>
        <p className="text-lg text-primary">
          Hello, I&apos;m React Web Developer With 3 Years experience In The Web
          And I Got Confused In A lot Fields And I Love Programming So Much :)
        </p>

        <h1 className="flex flex-col sm:items-start items-center gap-5">
          If You Want To Learn More About Me Go To My Linkedin Profile
          <a href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215">
            <CiLinkedin className="text-5xl text-[#A26F45] " />
          </a>
        </h1>
      </div>
      <div className="image hidden lg:flex justify-center items-center relative ml-5">
        <img src={dawam} alt="Abdelrahman Ahmed" className="w-[17rem]" />
        <h2 className="absolute text-2xl font-semibold text-[#A26F45] opacity-0">
          3 exp
        </h2>
      </div>
    </div>
  )
}
export default About
