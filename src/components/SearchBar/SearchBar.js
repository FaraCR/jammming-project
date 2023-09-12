import React, {useCallback, useState} from 'react';

function SearchBar(props) {

    const [val, setVal] = useState('');

    const handleChange = useCallback((event) => {
        setVal(event.target.value);
    }, []);

    const handleSearch = useCallback(() => {
        props.onSearch(val);
    }, [props.onSearch, val])

  return (
    <div className='searchBar'>
        <input placeholder='Enter a song title' onChange={handleChange} />
        <button className='searchButton' onClick={handleSearch}>
            Search
        </button>
    </div>
  )
}

export default SearchBar