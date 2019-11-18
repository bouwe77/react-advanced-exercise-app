import axios from "axios";

export const useNumberApi = () => {
  const dontKnow = "¯\\_(ツ)_/¯";
  const searchTypes = ["trivia", "year", "math"];

  const getUrl = (number, searchType) => {
    const baseUrl = `https://cors-everywhere.herokuapp.com/http://numbersapi.com`;
    const searchArgument = searchType ? `${number}/${searchType}` : `${number}`;

    return `${baseUrl}/${searchArgument}/?json&default=${dontKnow}`;
  };

  const searchNumberApi = async (number, searchType) => {
    // Do not query the API if it is not a number.
    if (isNaN(number)) return dontKnow;

    // Pick a random search type when not specified.
    if (!searchType) searchType = searchTypes[Math.floor(Math.random() * searchTypes.length)];

    const url = getUrl(number, searchType);

    try {
      const response = await axios.get(url);
      return response.data.text;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return { searchNumberApi };
};
