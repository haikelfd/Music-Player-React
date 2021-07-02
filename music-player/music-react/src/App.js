import  React,{useState} from "react";
//Adding components:
import "./styles/app.scss";
//Adding components:
import Player from "./Components/Player";
import Song from "./Components/Song";
//Import util 
import data from "./util";
import Library from "./Components/Library";
 
function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying} 
      currentSong ={currentSong}/>
  <library songs={songs}/>
    </div>
 );
}

export default App;
