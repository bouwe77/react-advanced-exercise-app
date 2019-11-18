import React, { useState } from "react";
import "./SearchForm.module.css";

export default function({ search }) {
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
        maxLength="8"
        placeholder=""
      />
      <button type="submit" disabled={!canBeSubmitted}>
        Search
      </button>
    </form>
  );
}
