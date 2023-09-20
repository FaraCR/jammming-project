import React, { useCallback } from "react";
import "./Track.css";

function Track(props) {
  const { onAdd, onRemove, track } = props;
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    return props.isRemoval ? (
      <button className="trackAction" onClick={removeTrack}>
        -
      </button>
    ) : (
      <button className="trackAction" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="track">
      <div className="trackData">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} - {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
