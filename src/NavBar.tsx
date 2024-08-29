import { useState } from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

  const [isOpen, changeOpen] = useState(false)

  const setHoverTrue = () => {
    changeOpen(true)
  }

  const setHoverFalse = () => {
    changeOpen(false)
  }

  return (
    <header className="relative bg-transparent p-2">
      <nav className="m-auto">
        <ul className="flex justify-center list-none m-0">
          <button>
            <li className="bg-transparent text-base text-white flex justify-center mt-10 mr-10">
              <NavLink to={`/astro-website/`} className="block px-4 text-center">Home</NavLink>
            </li>
          </button>
          <div onMouseEnter={setHoverTrue} onMouseLeave={setHoverFalse} className="flex flex-col">
            <button>
              <li className="bg-transparent text-base text-white flex justify-center mt-10 mr-10 hover:text-gray-500">
                <NavLink to={`/astro-website/astrophotography`}>Astrophotography</NavLink>
              </li>
              <i className="fa fa-caret-down"></i>
            </button>
            {isOpen ? 
              <div className="bg-gray-500 rounded-lg py-2 self-start w-max absolute mt-16">
                <NavLink to={`/astro-website/astrophotography/nebulae`} className="block px-4 py-2 text-center">Nebulae</NavLink>
                <NavLink to={`/astro-website/astrophotography/galaxies`} className="block px-4 py-2 text-center">Galaxies</NavLink>
                <NavLink to={`/astro-website/astrophotography/other-objects`} className="block px-4 py-2 text-center">Other Objects</NavLink>
              </div> : 
              <div></div>
            }
          </div>
          <li className="bg-transparent text-base text-white flex justify-center mt-10 mr-10">
            Softwares Used
          </li>
          <li className="bg-transparent text-base text-white flex justify-center mt-10 mr-10">
            Tutorial
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default NavBar