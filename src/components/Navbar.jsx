import { useState } from "react"
import { Link, NavLink } from "react-router"
import { logo, close, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative z-20 flex w-full items-center justify-between py-6" aria-label="Main navigation">
      <Link to="/" onClick={() => setMenuOpen(false)} aria-label="HooBank home">
        <img src={logo} alt="HooBank" className="h-[32px] w-[124px]" />
      </Link>

      <ul className="hidden flex-1 items-center justify-end gap-10 sm:flex">
        {navLinks.map((nav) => (
          <li key={nav.path}>
            <NavLink
              to={nav.path}
              end
              className={({ isActive }) => `border-b-2 pb-2 font-poppins text-[16px] transition-colors ${
                isActive ? "border-secondary text-secondary" : "border-transparent text-dimWhite hover:text-white"
              }`}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src={menuOpen ? close : menu} alt="" className="h-7 w-7 object-contain" />
        </button>

        <ul id="mobile-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute right-0 top-[76px] min-w-[190px] flex-col gap-1 rounded-2xl border border-white/10 bg-[#17213a] p-3 shadow-2xl`}>
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <NavLink
                  to={nav.path}
                  end
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block rounded-lg px-4 py-3 font-poppins text-[16px] ${
                    isActive ? "bg-secondary/15 text-secondary" : "text-dimWhite hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
