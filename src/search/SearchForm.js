import React, { useState } from "react";
import "./SearchForm.module.css";

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
      <input type="text" value={query} onChange={handleQueryChange} placeholder="" />
      <button type="submit" disabled={!canBeSubmitted}>
        Search
      </button>
    </form>
  );
}
