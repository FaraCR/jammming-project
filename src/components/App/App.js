import React, { useState, useCallback } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Spotify/Spotify'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((val) => {
    Spotify.search(val).then(setSearchResults);
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const addTrack = useCallback((track) => {
    if(!playlistTracks.find((currentTrack) => currentTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id))
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);


  return (
    <div>
        <h1>Jammming</h1>
      <div className='main'>
        <SearchBar onSearch={search} />
        <div className='mainPlaylist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist} />
        </div>
      </div>
    </div>
  )
}

export default App