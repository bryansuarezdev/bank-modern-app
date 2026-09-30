import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import { Link, NavLink } from "react-router"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <Link to="/" aria-label="HooBank home">
        <img src={logo} alt="HooBank" className="w-[266px] h-[72.14px] object-contain" />
      </Link>
      <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        A portfolio project built to learn React and explore a modern banking interface.
      </p>
    </div>

    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            {footerlink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerlink.links.map((link, index) => (
              <li key={link.slug} className={index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}>
                <NavLink
                  to={`/info/${link.slug}`}
                  className={({ isActive }) => `font-poppins text-[16px] leading-[24px] transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary ${isActive ? "text-secondary" : "text-dimWhite"}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>  
        </div>
      ))}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © {new Date().getFullYear()} Bryan Suarez · Portfolio demo.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.id}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-secondary ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          >
            {social.icon ? <img src={social.icon} alt="" className="h-[22px] w-[22px]" /> : <span aria-hidden="true" className="font-poppins text-xs font-bold text-white">GH</span>}
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
