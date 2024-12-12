import "./App.css";
import WeatherApp from "./Component/WeatherApp";
import Navbar from "./Component/Navbar";
import Cnsole from "./Component/Cnsole";
import Bgr from "/Background.png";

function App() {
  return (
    <>
      <div
        className="font-nunito"
        style={{ 
          backgroundImage: `url(${Bgr})`, 
          backgroundSize: 'cover',  // or 'contain'
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        
      >
        <Navbar />
        <WeatherApp />
        <Cnsole />
      </div>
    </>
  );
}

export default App;
