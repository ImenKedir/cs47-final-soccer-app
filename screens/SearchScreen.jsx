import { useState } from "react";
import { Layout } from "@ui-kitten/components";
import SearchBar from "../comps/SearchBar";
import SearchResults from "../comps/SearchResults";

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
