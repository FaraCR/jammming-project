import React, { useCallback, useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [val, setVal] = useState('');

  const handleChange = useCallback((event) => {
    setVal(event.target.value);
  }, []);

  const { onSearch } = props;
  const handleSearch = useCallback((e) => {
    onSearch(val);
  }, [onSearch, val]);

  return (
    <div className="searchBar">
      <input placeholder="Enter a song title"
      value={val}
      onChange={handleChange} />
      <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
