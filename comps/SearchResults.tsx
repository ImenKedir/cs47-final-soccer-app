import { useState, useEffect } from "react";
import { Text } from "@ui-kitten/components";
// @ts-ignore
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

const SearchResults = ({ queryUrl }) => {
  const [data, setData] = useState(undefined);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };

  useEffect(() => {
    const featchData = async () => {
      fetch(queryUrl, options)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    };
    featchData();
  }, [queryUrl]);

  data && console.log(data);

  return <>{data ? <Text>data</Text> : <Text>Loading...</Text>}</>;
};

export default SearchResults;
