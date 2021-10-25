import { useState } from "react";
import "./styles.css";

function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSearchSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={searchValue}
          placeholder="Search images and photos"
          onChange={handleSearchOnChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
