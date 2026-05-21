import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["search-bar"]}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search Recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles["search-btn"]}>
          Search
        </button>
        {query && (
          <button className={styles["clear-btn"]} onClick={handleClear}>
            x
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
