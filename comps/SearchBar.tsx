import { useState } from "react";
import { Layout, Button, Icon, Input } from "@ui-kitten/components";

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

export default SearchBar;