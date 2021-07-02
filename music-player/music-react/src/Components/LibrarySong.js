import React from 'react';


const LibrarySong = (currentSong) => {
    return(
        <div className="library-Song">
            <img alt={song.name} src={song.cover}>
            </img>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    );
};
export default LibrarySong;