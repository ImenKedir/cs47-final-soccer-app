import { useState } from "react";
import { Layout, Button, Icon, Input, Text } from "@ui-kitten/components";
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

const SearchIcon = (props) => {
  return <Icon {...props} name="search" />;
};

const SearchBar = ({ setQueryUrl }) => {
  const [userQuery, setUserQuery] = useState("");

  const handleSearch = () => {
    if (userQuery) {
      const baseUrl = "https://footapi7.p.rapidapi.com/api/search/";
      setQueryUrl(baseUrl + encodeURIComponent(userQuery));
    } else {
      setQueryUrl(undefined);
    }
  };

  return (
    <Layout
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 32,
        marginVertical: 16,
      }}
    >
      <Input
        style={{ flex: 1, height: "100%" }}
        placeholder="Search Players or Teams"
        value={userQuery}
        onChangeText={(nextValue) => setUserQuery(nextValue)}
      />
      <Button
        style={{ marginLeft: 8, height: "100%" }}
        size="small"
        accessoryLeft={SearchIcon}
        appearance="outline"
        onPress={handleSearch}
      />
    </Layout>
  );
};

const SearchResults = ({ queryUrl }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };

  fetch(queryUrl, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <Text category="h1">{queryUrl}</Text>;
};

export default SearchScreen = () => {
  const [queryUrl, setQueryUrl] = useState(undefined);

  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SearchBar setQueryUrl={setQueryUrl} />
      {queryUrl && <SearchResults queryUrl={queryUrl} />}
    </Layout>
  );
};
