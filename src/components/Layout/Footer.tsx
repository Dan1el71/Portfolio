import { BsHeartFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaHammer, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="opacity-80 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-4 sm:mx-auto flex items-center justify-between py-4">
        <span className="flex space-x-4 items-center text-sm sm:text-centertext-zinc-200/90">
          <FaHammer />
          <p className="flex items-center">
            Built by Daniel with
            <BsHeartFill className="mx-2" />
          </p>
        </span>

        <ul className="flex flex-wrap items-center space-x-4 font-semibold ext-white/90 sm:mt-0">
          <li>
            <a
              href="https://github.com/Dan1el71"
              className="hover:text-font-secondary "
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-rangel-morales-897103233/"
              className="hover:text-font-secondary"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
