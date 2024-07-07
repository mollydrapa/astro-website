import NavBar from "./NavBar";

function MainPage() {

  return (
    <div>
      <div className="bg-milkyway h-screen w-screen bg-no-repeat bg-cover sticky m-0 p-0 opacity-95">
        <NavBar />
        <h1 className="text-9xl text-white flex justify-center">Welcome!</h1>
        <h2 className="text-5xl text-white flex justify-center pb-10">To m.Robin's Astrophotography Gallery</h2>
        <h3 className="text-sm text-white flex justify-center">Pssttt, the banner image is a five stack exposure of the Milky Way, which you can find here</h3>
        <div className="left-1/2 w-screen px-7 -translate-x-1">
          <h2 className="text-5xl text-white flex justify-start">About Me</h2>
        </div>
      </div>
    </div>
  );

}
  

export default MainPage;