import { useState, useEffect } from "react";
import { Text } from "@ui-kitten/components";
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

export default SearchResults = ({ queryUrl }) => {
  const [data, setData] = useState(undefined);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };

  useEffect(async () => {
    fetch(queryUrl, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [queryUrl]);

  data && console.log(data);

  return <>{data ? <Text>data</Text> : <Text>Loading...</Text>}</>;
};
