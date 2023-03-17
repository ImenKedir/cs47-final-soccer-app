import { TabView, Tab, Icon } from "@ui-kitten/components";
import PlayerResults from "../comps/PlayerResults";
import TeamResults from "../comps/TeamResults";
import SavedContext from "../util/SavedContext";
import { useState, useContext } from "react";

const PlayersIcon = (props) => <Icon name="person" {...props} />;

const TeamsIcon = (props) => <Icon name="people" {...props} />;

export default SavedScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { saved, setSaved } = useContext(SavedContext);
  console.log(saved)

  return (
    <TabView
      style={{ flex: 1, width: "100%" }}
      selectedIndex={selectedTab}
      onSelect={(index) => setSelectedTab(index)}
    >
      <Tab title="Players" icon={PlayersIcon}>
        <PlayerResults data={saved} />
      </Tab>
      <Tab title="Teams" icon={TeamsIcon}>
        <TeamResults data={saved} />
      </Tab>
    </TabView>
  );
};
