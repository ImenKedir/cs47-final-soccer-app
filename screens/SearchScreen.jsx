import { useState } from "react";
import { Layout } from "@ui-kitten/components";
import { SearchBar, SearchResults } from "../comps";

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
      <SearchResults queryUrl={queryUrl} />
    </Layout>
  );
};
