import React from "react";
import { useNumberApi } from "../numbers/api";
import SearchForm from "../search/SearchForm";
import NumberSearchResult from "../numbers/SearchResult";

function SearchPage() {
  const { searchNumberApi } = useNumberApi();

  async function search(query) {
    try {
      const numberApiResult = isNaN(query) ? query : await searchNumberApi(query);
      console.log(numberApiResult);
    } catch (error) {
      console.log(error);
    }
  }

  return <>TO DO: search functionality here...</>;
}

export default SearchPage;
