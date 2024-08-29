import { NavLink } from "react-router-dom"
import NavBar from "../NavBar"

function Astrophotography () {

  return (
    <div className="bg-milkyway h-screen w-screen bg-no-repeat sticky bg-cover m-0 p-0 bg-fixed overflow-scroll">
      <NavBar />
      <h1 className="text-9xl text-white flex justify-center mb-20">Astrophotography Gallery</h1>
      <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-x-20 pb-4">
            <div className="w-max flex flex-col">
              <div className="self-center w-min" style={{width: 400, height: 400}}>
                <NavLink to="/astro-website/astrophotography/nebulae">
                  <a href="">
                    <img
                      src="/astro-website/2022-09-24 NGC 2023 Horsehead Nebula.webp"
                      style={{width: 400, height: 400}}
                      className="object-cover rounded-xl"
                    />
                  </a>
                </NavLink>
              </div>
              <h2 className="text-2xl text-white text-center font-bold pt-6 pb-4">Nebulae</h2>
              <h3 className="text-l text-white text-center pb-4">Astrophotography of nebulae</h3>
            </div>
            <div className="w-max flex flex-col">
              <div className="self-center w-min" style={{width: 400, height: 400}}>
                <NavLink to="/astro-website/astrophotography/galaxies">
                  <a href="">
                    <img
                      src="/astro-website/2022-07-19 NGC 5194 Whirlpool Galaxy.webp"
                      style={{width: 400, height: 400}}
                      className="object-cover rounded-xl"
                    />
                  </a>
                </NavLink>
              </div>
              <h2 className="text-2xl text-white text-center font-bold pt-6 pb-4">Galaxies</h2>
              <h3 className="text-l text-white text-center pb-4">Astrophotography of galaxies</h3>
            </div>
            <div className="w-max flex flex-col">
              <div className="self-center w-min" style={{width: 400, height: 400}}>
                <NavLink to="/astro-website/astrophotography/other-objects">
                  <a href="">
                    <img
                      src="/astro-website/2020-09-27 NGC 1432 Pleiades Cluster.webp"
                      style={{width: 400, height: 400}}
                      className="object-cover rounded-xl"
                    />
                  </a>
                </NavLink>
              </div>
              <h2 className="text-2xl text-white text-center font-bold pt-6 pb-4">Other Objects</h2>
              <h3 className="text-l text-white text-center pb-4">Astrophotography of other deep space objects</h3>
            </div>
          </div>
        </div>
    </div>
  )

}

export default Astrophotography