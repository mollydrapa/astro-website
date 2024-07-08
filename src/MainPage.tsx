import NavBar from "./NavBar";

function MainPage() {

  return (
    <div>
      <div className="bg-milkyway h-screen w-screen bg-no-repeat sticky bg-cover m-0 p-0 opacity-95 bg-fixed overflow-scroll">
        <NavBar />
        <h1 className="text-9xl text-white flex justify-center">Welcome!</h1>
        <h2 className="text-5xl text-white flex justify-center pb-10">To m.Robin's Astrophotography Gallery</h2>
        <h3 className="text-xs text-white flex justify-center">Pssttt, the banner image is a five stack exposure of the Milky Way, which you can find here</h3>
        <div className="w-1/2 pt-4 justify-center">
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
              src="src/assets/M16 Pillars of Creation 01_16_2023.png"
              className="object-cover"
              style={{width: 443, height: 242}}
            >
            </img>
          </div>
          
        </div>
      </div>
    </div>
  );

}
  

export default MainPage;