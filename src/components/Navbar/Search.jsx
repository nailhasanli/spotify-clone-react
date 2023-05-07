import React from "react";
import Icon from "../../Icons";
const Search = () => {
  return (
    <div className="navbar-search">
      <label htmlFor="search-input">
        <Icon size={24} name="search" />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        placeholder="What do you want to listen to?"
      />
    </div>
  );
};

export default Search;
