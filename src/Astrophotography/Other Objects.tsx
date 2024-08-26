import NavBar from "../NavBar";
import Image from "./Image";

function OtherObjects() {

  let entries = [
    {image: "/astro-website/2024-05-13 NGC 1432 Pleiades Cluster.webp", title: "Pleiades", date: "May 2024", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-12-18 NGC 6205 Great Hercules Cluster.webp", title: "Great Hercules Cluster", date: "December 2022", source: "Magic Lens", filters: "Red Light, Green Light, Blue Light, Visible Light", self: false},
    {image: "/astro-website/2022-11-07 Moon.webp", title: "Full Moon", date: "November 2022", source: "", filters: "Twenty one second exposures, stacked", self: true},
    {image: "/astro-website/2022-11-03 Moon.webp", title: "Waxing Gibbous Moon", date: "November 2022", source: "", filters: "One Exposure", self: true},
    {image: "/astro-website/2022-10-30 NGC 1432 Pleiades Cluster.webp", title: "Pleiades Cluster", date: "October 2022", source: "", filters: "Ten five second exposures, stacked", self: true},
    {image: "/astro-website/2022-10-23 Cygnus.webp", title: "Cygnus Milky Way Band", date: "October 2022", source: "", filters: "Twenty five second exposures, stacked", self: true},
    {image: "/astro-website/2022-10-23 Cassiopeia.webp", title: "Cassiopeia Milky Way Band", date: "October 2022", source: "", filters: "Twenty five second exposures, stacked", self: true},
    {image: "/astro-website/2022-10-07 NGC 6705 Wild Duck Cluster.webp", title: "Wild Duck Cluster", date: "October 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2022-09-04 Lyra.webp", title: "Lyra Starfield", date: "September 2022", source: "", filters: "Five fifteen second exposures, stacked", self: true},
    {image: "/astro-website/2022-09-03 Capricornus.webp", title: "Capricornus Starfield", date: "September 2022", source: "", filters: "Five fifteen second exposures, stacked", self: true},
    {image: "/astro-website/2022-08-28 NGC 908 Polaris.webp", title: "Polaris Star Trails", date: "August 2022", source: "", filters: "One five minute exposure", self: true},
    {image: "/astro-website/2022-07-19 NGC 6205 Great Hercules Cluster.webp", title: "Great Hercules Cluster", date: "July 2022", source: "NSO", filters: "Red Light, Green Light, Blue Light, Hydrogen Alpha, Oxygen III", self: false},
    {image: "/astro-website/2020-09-27 NGC 1432 Pleiades Cluster.webp", title: "Pleiades Cluster", date: "September 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false},
    {image: "/astro-website/2020-09-25 Starfield.webp", title: "Starfield", date: "September 2020", source: "NSO", filters: "Red Light, Green Light, Blue Light", self: false}
  ]

  return (
    <div className="bg-pleiades h-screen w-screen bg-no-repeat sticky bg-cover bg-fixed overflow-scroll">
      <NavBar />
      <h1 className="text-9xl text-white flex justify-center">Other Objects</h1>
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

export default OtherObjects