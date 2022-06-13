import './App.css';
import one from "./1.jpeg";
import two from "./2.jpeg";
import three from "./3.jpeg";
import four from "./4.jpeg";
import five from "./5.jpeg";
import NavBar from "./navbar.js";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div className="container">
        <div className='blocks' id="element-one">
          <h1>HEY</h1>
        </div>
        <div className='blocks' id="element-two">
          <h1>LET'S</h1>
        </div>
        <div className='blocks' id="element-three">
          <h1>GIVE</h1>
        </div>
        <div className='blocks' id="element-four">
          <h1>ALL</h1>
        </div>
        <div className='blocks' id="element-five">
          <h1>YOU CAN</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
