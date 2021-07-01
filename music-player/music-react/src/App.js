import  React,{useState} from "react";
//Adding components:
import "./styles/app.scss";
//Adding components:
import Player from "./Components/Player";
import Song from "./Components/Song";
//Import util 
import data from "./util";

function App() {
  //state
  const [songs, setSong] = useState(data())
  return (
    <div className="App">
      <Song/>
      <Player/>
  
    </div>
 );
}

export default App;
