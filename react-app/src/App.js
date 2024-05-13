import  Navbar from './Navbar/Navbar.js'
// import Snack from './Snake/Snake.js' 
import './Snake/Snake.css'
// import "./styles.css";

import Board from "./Snake/Board.js";

function App() {
  return (
    <>
          <Navbar home="Snake" Contact='Rock-Paper-Scissors'/>
          
          <div className="App">
      <h1>Let's play Snack& laser game .</h1>
      <section style={{ display: "flex", flexDirection: "row" }}>
        <div className="info-tips">
          <span className="alert"></span>
          <p>Snack</p>
        </div>
        <div className="info-tips">
          <span className="success"></span>
          <p>Ladder</p>
        </div>
        <div className="info-tips">
          <span className="pulser"></span>
          <p>Position</p>
        </div>
        <div className="info-tips">
          <span className="destination"></span>
          <p>dice</p>
        </div>
      </section>
      <Board />
    </div>
          
    </>
   );
}

export default App;
