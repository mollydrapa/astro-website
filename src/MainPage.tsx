import NavBar from "./NavBar";

function MainPage() {

  return (
    <div>
      <div className="bg-milkyway h-screen w-screen bg-no-repeat sticky bg-cover m-0 p-0 opacity-95 bg-fixed overflow-scroll">
        <NavBar />
        <h1 className="text-9xl text-white flex justify-center">Welcome!</h1>
        <h2 className="text-5xl text-white flex justify-center pb-10">To m.Robin's Astrophotography Gallery</h2>
        <h3 className="text-xs text-white flex justify-center">Pssttt, the banner image is a five stack exposure of the Milky Way, which you can find here</h3>
        <div className="flex justify-center pb-20">
          <div className="flex items-center justify-evenly w-3/4">
            <div className="flex-col w-1/2 pt-4 justify-center pl-6">
              <h2 className="text-5xl text-white text-center">About Me</h2>
              <p className="left-1/2 text-white text-center m-3">
                Hello! I am Molly Drapa, a hobbyist astronomer and astrophotographer.
              </p>
              <p className="left-1/2 text-white text-center m-3">
                Using my love for science and art, I create beautiful images of deep space objects in collaboration with the local Northern Skies Observatory and using my own DSLR camera.
              </p>
              <p className="left-1/2 text-white text-center m-3">
                I have compiled my astrophotography into an informative gallery for public viewing.
              </p>
              <div className="flex justify-center">
                <img
                  src="/astro-website/2023:01:16 NGC 6611 Pillars of Creation.png"
                  className="object-cover h-96 w-192"
                />
              </div>
            </div>
            <div className="flex pr-12">
              <img 
                  src="/astro-website/md_92122_037EMAIL.jpeg"
                  className="object-cover"
                  style={{width: 368, height: 541}} 
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="-mr-20">
            <img 
              src="/astro-website/IMG_2957.png"
              className="object-cover"
              style={{width: 600, height: 736}}
            />
          </div>
          <div className="w-1/3 -ml-20">
            <div className="justify-center pb-12">
              <h2 className="text-5xl text-white pb-6 text-center">Northern Skies Observatory</h2>
              <p className="text-white text-center">
              A massive part of my work is finding raw data, and there is no location in Vermont that has better viewing conditions and more powerful telescopes than the Northern Skies Observatory. Their 17 inch telescope (left) is able to capture exquisite images of the cosmos. Many of my images come from raw data generously provided by them.
              </p>
            </div>
            <div>
              <img
                src="/astro-website/IMG_2956.png"
                className="object-cover"
                style={{width:525, height: 397}}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col">
            <div>
              <h2 className="text-5xl text-white text-center pb-6">Magic Lens Photography</h2>
              <h5 className="text-white text-center">
                Another source of my raw data is the local astrophotographer Bernhard Wunder. He has generously let me use some of his processed data and professional telescopes.
              </h5>
              <p className="text-white text-center">
                To see more of his work, follow this link to his website: https://www.magiclens.net/ 
              </p>
            </div>
            <img
              src="/astro-website/2022:12:18 NGC 6205 Great Hercules Cluster.png"
              className="object-cover flex justify-center w-min"
              style={{width: 545, height: 337}}
            />
          </div>
          <div>
            <img
              src="/astro-website/2022:11:04 NGC 7000 North American Nebula.png"
              className="object-cover"
              style={{width: 545, height: 564}}
            />
          </div>
        </div>
      </div>
    </div>
  );

}
  

export default MainPage;