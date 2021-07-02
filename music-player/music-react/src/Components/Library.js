import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import LibrarySong from './LibrarySong';

const Library = () => {
    return(
        <div className="library">
        <h2> Library </h2>
            <div className = "library-songs">
                {songs.map((song) => (
                    <LibrarySong/>
                ))}
             </div>
        </div>
    )
}

export default Library; 