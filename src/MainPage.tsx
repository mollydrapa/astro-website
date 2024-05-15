import MilkyWay from "./assets/Milky Way 09_01_2022.png"

function MainPage() {
  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <h2>
        To m.Robin's Astrophotography Gallery
      </h2>
      <img 
        className="object-cover h-96 w-192"
        src={MilkyWay}>
      </img>
    </div>
    
  );
}

export default MainPage;