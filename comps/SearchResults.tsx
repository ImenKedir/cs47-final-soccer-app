import { useState, useEffect } from "react";
import { TabView, Tab, Icon, Text, Spinner } from "@ui-kitten/components";
import { PlayerResults, TeamResults } from ".";
import * as fakeData from "../dummyResponse.json";
// @ts-ignore
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

const PlayersIcon = (props) => <Icon name="person" {...props} />;

const TeamsIcon = (props) => <Icon name="people" {...props} />;

const SearchResults = ({ queryUrl }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState(fakeData.results);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };

  useEffect(() => {
    const featchData = async () => {
      setLoading(true);
      fetch(queryUrl, options)
        .then((response) => response.json())
        .then((response) => setData(response.results))
        .catch((err) => console.error(err));
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    };
    if (queryUrl) {
      featchData();
    }
  }, [queryUrl]);

  console.log(loading);

  if (loading) {
    return <Spinner size='giant'/>
  }

  if (!data) {
    return (
      <Text category="h5" style={{ marginVertical: 64 }}>
        No results found
      </Text>
    );
  }

  return (
    <TabView
      style={{ flex: 1, width: "100%" }}
      selectedIndex={selectedTab}
      onSelect={(index) => setSelectedTab(index)}
    >
      <Tab title="Players" icon={PlayersIcon}>
        <PlayerResults data={data} />
      </Tab>
      <Tab title="Teams" icon={TeamsIcon}>
        <TeamResults data={data} />
      </Tab>
    </TabView>
  );
};

export default SearchResults;
