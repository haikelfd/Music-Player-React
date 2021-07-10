import  React,{useState,useRef} from "react";
//Adding components:
import "./styles/app.scss";
//Adding components:
import Player from "./Components/Player";
import Song from "./Components/Song";
//Import util 
import data from "./util";
import Library from "./Components/Library";
import Nav  from "./Components/Nav";
import { library } from "@fortawesome/fontawesome-svg-core";
 
function App() {
   //Ref
   const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  const[songInfo, setSongInfo] = useState({
    currentTime: null,
    duration : null,
});
const [libraryStatus,setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo,currentTime : current, duration})
 }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}></Nav>
       
      <Song currentSong={currentSong}/>
      <Player 
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying} 
      currentSong ={currentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      songs={songs}
      setCurrentSong={setCurrentSong}/>
  <Library audioRef={audioRef}
           setSongInfo={setSongInfo} 
           songs={songs} 
           setCurrentSong={setCurrentSong}
           isPlaying={isPlaying}
           setSongs={setSongs}
           libraryStatus={libraryStatus}/>
  <audio 
 onTimeUpdate={timeUpdateHandler}
 onLoadedMetadata={timeUpdateHandler}
 ref={audioRef} 
 src={currentSong.audio}>

 </audio>
    </div>
 );
}

export default App;
