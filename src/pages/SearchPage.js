import React from "react";
import { useNumberApi } from "../numbers/api";
import SearchForm from "../search/SearchForm";
import SearchResult from "../numbers/SearchResult";

function SearchPage() {
  const { searchNumberApi } = useNumberApi();

  /**
   * Calls the Numbers API with the given query.
   */
  async function search(query) {
    try {
      const numberApiResult = isNaN(query) ? query : await searchNumberApi(query);
      console.log(numberApiResult);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  // Return JSX, which is the UI for this component
  return <>TO DO: search functionality here...</>;
}

export default SearchPage;
