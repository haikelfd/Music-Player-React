import React from 'react';


const Song= ({currentSong}) =>{
    return(
        <div className="Song-container">
<img alt={currentSong.name} src={currentSong.cover}></img>
<h1> {currentSong.name}</h1>
<h1>{currentSong.artist}</h1>
 </div>
    );
}
export default Song ;