import { useState } from "react";
import { Layout, Button, Icon, Text, Input } from "@ui-kitten/components";

const SearchIcon = (props) => {
  return <Icon {...props} name="search" />;
};

const SearchBar = ({ query, setQuery, handleSearch }) => {
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
        value={query}
        onChangeText={(nextValue) => setQuery(nextValue)}
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

export default SearchScreen = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
    </Layout>
  );
};
