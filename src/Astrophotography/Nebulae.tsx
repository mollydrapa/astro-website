import NavBar from "../NavBar";
import Image from "./Image";


function Nebulae() {
  let entries = [
    {image: "/astro-website/2024-05-13 NGC 1976 Orion Nebula.webp", title: "Great Nebula in Orion", date: "May 2024", source:"NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023-05-15 NGC 6523 Lagoon Nebula.webp", title: "Lagoon Nebula", date: "May 2023", source:"Hubble", filters:"Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023-04-16 NGC 896 NGC 1027 Heart and Soul Nebulae.webp", title: "Heart and Soul Nebulae", date: "April 2023", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2023-04-06 NGC 6888 Crescent Nebula.webp", title: "Crescent Nebula", date: "April 2023", source: "NSO", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2023-04-03 NGC 6618 Omega Nebula.webp", title: "Omega Nebula", date: "April 2023", source: "NSO", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2023-04-02 NGC 2244 Rosette Nebula.webp", title: "Rosette Nebula", date: "April 2023", source: "NSO", filters: "Rad Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2023-04-02 NGC 1893 Tadpole Nebula.webp", title: "Tadpole Nebula False Color", date: "April 2023", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2023-02-04 NGC 6611 Eagle Nebula.webp", title: "Eagle Nebula", date: "February 2023", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2023-01-16 NGC 6611 Eagle Nebula.webp", title: "Eagle Nebula", date: "January 2023", source: "James Webb", filters:"Mid Infrared 15µm, Mid Infrared 11.3µm, Mid Infrared 7.7µm", self: false},
    {image: "/astro-website/2023-01-16 NGC 6611 Pillars of Creation.webp", title: "Pillars of Creation", date: "January 2023", source: "Hubble", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023-01-13 NGC 3327 Carina Nebula.webp", title: "Carina Nebula", date: "January 2023", source: "Hubble", filters: "Red Light, Green Light Blue Light", self: false},
    {image: "/astro-website/2022-12-31 NGC 6960 Veil Nebula.webp", title: "Veil Nebula", date: "December 2022", source: "NSO", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-12-07 NGC 1973 NGC 1975 NGC 1977 Running Man Nebula.webp", title: "Running Man Nebula", date: "December 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-12-04 NGC 1973 NGC 1975 NGC 1976 NGC 1977 NGC 2023 NGC 2024 Running Man Nebula Orion Nebula Horsehead Nebula Flame Nebula.webp", title: "Orion Nebula and Surrounding Region", date: "December 2022", source: "Magic Lens", filters: "Red Light, Green Light Blue Light, Hydrogen Alpha, Visible Light", self: false},
    {image: "/astro-website/2022-11-10 NGC 896 NGC 1027 Heart and Soul Nebulae.webp", title: "Heart and Soul Nebulae", date: "November 2022", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-11-04 NGC 7000 North American Nebula.webp", title: "North American Nebula", date: "November 2022", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-11-04 NGC 2024 Flame Nebula.webp", title: "Flame Nebula", date: "November 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2022-10-27 NGC 2264 Cone Nebula.webp", title: "Cone Nebula", date: "October 2022", source: "Magic Lens", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-10-15 NGC 650 Little Dumbbell Nebula.webp", title: "Little Dumbbell Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-10-10 NGC 6611 Eagle Nebula.webp", title: "Eagle Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-10-03 NGC 1952 Crab Nebula.webp", title: "Crab Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-10-02 NGC 7023 Iris Nebula.webp", title: "Iris Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-10-01 NGC 7293 Helix Nebula.webp", title: "Helix Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022-10-01 NGC 1499 California Nebula.webp", title: "California Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-09-29 NGC 6618 Omega Nebula.webp", title: "Omega Nebula", date: "/september 2022", source: "NSO", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-09-29 NGC 6514 Trifid Nebula.webp", title: "Trifid Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-09-28 NGC 6720 Ring Nebula.webp", title: "Ring Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022-09-24 NGC 2023 Horsehead Nebula.webp", title: "Horsehead Nebula", date: "/setepmber 2022", source: "NSO", filters: "Red light, Green Light, Blue Light Hydrogen Alpha", self: false},
    {image: "/astro-website/2022-09-24 NGC 2244 Rosette Nebula.webp", title: "Rosette Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022-09-18 NGC 896 Heart Nebula.webp", title: "Heart Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022-09-15 NGC 6888 Crescent Nebula.webp", title: "Crescent Nebula", date: "/september 2022", source: "NSO", filters: "Hydrogen Alpha, Oxygen III, Sulphur II", self: false},
    {image: "/astro-website/2022-07-19 NGC 6960 Veil Nebula.webp", title: "Veil Nebula", date: "July 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022-07-18 NGC 7000 Pelican Nebula.webp", title: "Pelican Nebula", date: "July 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2022-07-18 NGC 1976 Orion Nebula.webp", title: "Great Nebula in Orion", date: "July 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-10-06 NGC 2068.webp", title: "Messier 78", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-10-05 NGC 650 Little Dumbbell Nebula.webp", title: "Little Dumbbell Nebula", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-27 NGC 3587 Owl Nebula.webp", title: "Owl Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-23 NGC 6611 Eagle Nebula.webp", title: "Eagle Nebula", date: "/september 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-16 NGC 7635 Bubble Nebula 1.webp", title: "Bubble Nebula False Color", date: "/september 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-16 NGC 7635 Bubble Nebula 2.webp", title: "Bubble Nebula False Color", date: "/september 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-14 NGC 7293 Helix Nebula.webp", title: "Helix Nebula", date: "/september 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-02-23 NGC 2244 Rosette Nebula.webp", title: "Rosette Nebula", date: "February 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2020-02-22 NGC 7000 Pelican Nebula.webp", title: "Pelican Nebula", date: "February 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2020-02-22 NGC 1976 Orion Nebula.webp", title: "Orion Nebula", date: "February 2022", source: "NSO", filters:"Red Light, Green Light, Blue Light", self: false}
  ]

  return (
    <div>
      <div className="bg-barnard h-screen w-screen bg-no-repeat sticky bg-cover bg-fixed overflow-scroll">
        <NavBar />
        <h1 className="text-9xl text-white flex justify-center">Nebulae</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-x-36 pb-4">
            {entries.map((entry) => (
              <Image image={entry.image} title={entry.title} date={entry.date} source={entry.source} filters={entry.filters} self={entry.self}></Image>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Nebulae