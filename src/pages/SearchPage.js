import React, { useState } from "react";
import { useNumberApi } from "../numbers/api";
import SearchForm from "../search/SearchForm";
import SearchResult from "../numbers/SearchResult";

function SearchPage() {
  const [numberApiResult, setNumberApiResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const { searchNumberApi } = useNumberApi();

  async function search(query) {
    setIsLoading(true);
    setErrorOccurred(false);

    try {
      const numberApiResult = isNaN(query) ? query : await searchNumberApi(query);
      setNumberApiResult(numberApiResult);
      console.log(numberApiResult);
    } catch (error) {
      setErrorOccurred(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchForm search={search} />
      {isLoading && <>loading...</>}
      {!errorOccurred && numberApiResult && <SearchResult result={numberApiResult} />}{" "}
    </>
  );
}

export default SearchPage;
