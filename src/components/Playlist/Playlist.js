import React, { useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {

    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value)
    }, [props.onNameChange]);

  return (
    <div className='playlist'>
        <input onChange={handleNameChange} defaultValue={'New Playlist'} />
        <Tracklist 
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove} />
        <button 
        className='saveButton'
        onClick={props.onSave}>Save to Spotify</button>
    </div>
  )
}

export default Playlist