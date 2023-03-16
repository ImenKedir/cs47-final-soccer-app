import {
  Card,
  Divider,
  Layout,
  List,
  Text,
  Button,
  ButtonGroup,
  Icon,
} from "@ui-kitten/components";
import { View, Pressable } from "react-native";
import { useState } from "react";
import PlayerMoreInfo from "./PlayerMoreInfo";

const PlayerResultHeader = ({ item }) => {
  // state to update the heart
  const [heart, setHeart] = useState(true);

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
      <Pressable onPress={() => setHeart(!heart)}>
        {heart ? (
          <Icon
            style={{ width: 32, height: 32 }}
            name="heart-outline"
            fill="#8F9BB3"
          />
        ) : (
          <Icon style={{ width: 32, height: 32 }} name="heart" fill="#8F9BB3" />
        )}
      </Pressable>
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
          alignItems: "center",
          padding: 8,
          borderRadius: 8,
        }}
        level="2"
      >
        <Text>{item.entity.team.name}</Text>
        <Button
          size="small"
          appearance="outline"
          onPress={() => setVisible(!visible)}
        >
          {visible ? "Less" : "More"}
        </Button>
      </Layout>
      <View style={{ height: 8 }} />
      <PlayerMoreInfo item={item} visible={visible} />
      <View style={{ height: 8 }} />
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
