import React, {useCallback} from 'react';
import './Track.css'

function Track(props) {

    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, 
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

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
    <div className='track'>
        <div className='trackData'>
            <h3>{props.track.name}</h3>
            <p>
                {props.track.artist} - {props.track.album}
            </p>
        </div>
        {renderAction()}
    </div>
  )
}

export default Track