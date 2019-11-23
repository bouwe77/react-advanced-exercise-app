import React, { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ search }) {
  const [query, setQuery] = useState("");
  const canBeSubmitted = query && query.length > 0;

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder=""
        className={styles["search-box"]}
      />
      <button type="submit" disabled={!canBeSubmitted}>
        Search
      </button>
    </form>
  );
}
