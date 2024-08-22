import NavBar from "../NavBar";
import Image from "./Image";

function Galaxies() {

  let entries = [
    {image: "/astro-website/2023:06:06 NGC 628 Phantom Galaxy.jpg", title: "Phantom Galaxy", date: "June 2023", source: "Hubble", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023:06:05 NGC 3034 Cigar Galaxy.png", title: "Cigar Galaxy", date: "June 2023", source: "Hubble", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023:05:16 NGC 5194 Whirlpool Galaxy.png", title: "Whirlpool Galaxy", date: "May 2023", source: "Hubble", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2023:01:17 NGC 5457 Pinwheel Galaxy.png", title: "Pinwheel Galaxy", date: "January 2023", source: "Magic Lens", filters: "Red Light, Green Light, Blue Light, Visible Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2023:01:17 NGC 5194 Whirlpool Galaxy.jpeg", title: "Whirlpool Galaxy", date: "January 2023", source: "Magic Lens", filters: "Red Light, Green Light, Blue Light, Visible Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2022:10:29 NGC 628 Phantom Galaxy.jpg", title: "Phantom Galaxy", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2022:10:27 NGC 224 Andromeda Galaxy.jpeg", title: "Andromeda Galaxy", date: "October 2022", source: "Magic Lens", filters: "Red Light, Green Light, Blue Light, Visible Light, Hydrogen Alpha", self: false},
    {image: "/astro-website/2022:10:01 NGC 221 NGC 224 Andromeda Galaxy.jpg", title: "M32 and Andromeda Galaxy", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2022:09:28 NGC 3623 NGC 3627.png", title: "Messier 65 & Messier 66", date: "September 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2022:09:25 NGC 205.png", title: "M110", date: "September 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2022:09:25 NGC 598 Triangulum Galaxy.jpeg", title: "Triangulum Galaxy", date: "September 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2022:09:01 Milky Way.png", title: "Milky Way Band", date: "September 2022", source: "None", filters: "Five fifteen second exposures, stacked", self: true},
    {image: "/astro-website/2022:07:19 NGC 5194 Whirlpool Galaxy.png", title: "Whirlpool Galaxy", date: "July 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2020:09:28 NGC 4594 Sombrero Galaxy.png", title: "Sombrero Galaxy", date: "September 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2020:09:15 NGC 224 Andromeda Galaxy.png", title: "Andromeda Galaxy", date: "September 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020:02:23 NGC 598 Triangulum Galaxy.jpg", title: "Triangulum Galaxy", date: "February 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha", self: false}
  ]

  return (
    <div className="bg-andromeda h-screen w-screen bg-no-repeat sticky bg-cover bg-fixed overflow-scroll">
      <NavBar />
      <h1 className="text-9xl text-white flex justify-center">Galaxies</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-x-36 pb-4">
          {entries.map((entry) => (
            <Image image={entry.image} title={entry.title} date={entry.date} source={entry.source} filters={entry.filters} self={entry.self}></Image>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Galaxies