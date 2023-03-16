import {
  Card,
  Divider,
  Layout,
  List,
  Text,
  Button,
  ButtonGroup,
} from "@ui-kitten/components";
import { View } from "react-native";
import { useState } from "react";
import PlayerInfo from "./PlayerInfo";

const PlayerResultHeader = ({ item }) => {
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <Text category="h5">{item.entity.shortName}</Text>
    </Layout>
  );
};

const PlayerResultFooter = ({ item, visible, setVisible }) => {
  return (
    <>
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 8,
          borderRadius: 8,
        }}
        level="2"
      >
        <Text>{item.entity.team.name}</Text>
        <Text>{item.entity.country.name}</Text>
      </Layout>
      <View style={{ height: 8 }} />
      <PlayerInfo item={item} visible={visible} />
      <View style={{ height: 8 }} />
      <ButtonGroup
        style={{ flex: 1, justifyContent: "space-between" }}
        appearance="outline"
      >
        <View style={{ height: 8 }} />
        <Button style={{ flex: 1 }} onPress={() => setVisible(!visible)}>
          {visible ? "Less" : "More"}
        </Button>
        <Button style={{ flex: 1 }}>Save</Button>
      </ButtonGroup>
    </>
  );
};

const PlayerResult = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Card style={{ borderRadius: 16, marginTop: 16, marginHorizontal: 32 }}>
      <PlayerResultHeader item={item} />
      <Divider style={{ marginVertical: 8 }} />
      <PlayerResultFooter
        item={item}
        visible={visible}
        setVisible={setVisible}
      />
    </Card>
  );
};

const PlayerResults = ({ data }) => {
  return (
    <List
      style={{
        flex: 1,
      }}
      data={data.filter((item) => item.type === "player")}
      renderItem={({ item }) => <PlayerResult item={item} />}
    />
  );
};

export default PlayerResults;
