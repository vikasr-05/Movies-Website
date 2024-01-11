import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <>
    <div>
          <h1 className="Movie-title"> Movies Port</h1>
        </div>
    <form className="search">
      <div className="searchcontainer">
      
      <input 
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search for movies title...."
        />
        </div>
      <button onClick={callSearchFunction} type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
        </>
  );
};

export default Search;
