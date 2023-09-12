import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
  return (
    <div className='searchResults'>
        <h2>Results:</h2>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
}

export default SearchResults