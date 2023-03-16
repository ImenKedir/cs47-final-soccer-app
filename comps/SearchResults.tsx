import { useState, useEffect } from "react";
import { TabView, Tab } from "@ui-kitten/components";
import { PlayerResults, TeamResults } from ".";

// @ts-ignore
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";
import * as fakeData from "../dummyResponse.json";
const defaultData = fakeData.results;

const SearchResults = ({ queryUrl }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState(fakeData.results);

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
        .then((response) => setData(response.results))
        .catch((err) => console.error(err));
    };

    if (queryUrl) {
      featchData();
    }
  }, [queryUrl]);

  return (
    <>
      <TabView
        style={{ flex: 1, width: "100%" }}
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <Tab title="Players">
          <PlayerResults data={data} />
        </Tab>
        <Tab title="Teams">
          <TeamResults data={data} />
        </Tab>
      </TabView>
    </>
  );
};

export default SearchResults;
