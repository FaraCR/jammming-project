import React, { useCallback } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

function Playlist(props) {
  const { onNameChange } = props;
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <Tracklist
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="saveButton" onClick={props.onSave}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
