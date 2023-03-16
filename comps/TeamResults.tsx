import {
  Card,
  Divider,
  Layout,
  List,
  Text,
  Button,
  Icon,
} from "@ui-kitten/components";
import { View, Pressable } from "react-native";
import { useState } from "react";
import TeamMoreInfo from "./TeamMoreInfo";

const TeamResultsHeader = ({ item }) => {
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
      <Text category="h4">{item.entity.shortName}</Text>
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

const TeamResultFooter = ({ item, visible, setVisible }) => {
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
        <Text>{item.entity.nameCode}</Text>
        <Button
          size="small"
          appearance="outline"
          onPress={() => setVisible(!visible)}
        >
          {visible ? "Less" : "More"}
        </Button>
      </Layout>
      <View style={{ marginVertical: 8 }} />
      <TeamMoreInfo item={item} visible={visible} />
      <View style={{ marginVertical: 8 }} />
    </>
  );
};

const TeamResult = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Card style={{ borderRadius: 16, marginTop: 16, marginHorizontal: 32 }}>
      <TeamResultsHeader item={item} />
      <Divider style={{ marginVertical: 8 }} />
      <TeamResultFooter visible={visible} setVisible={setVisible} item={item} />
    </Card>
  );
};

const TeamResults = ({ data }) => {
  return (
    <List
      style={{
        flex: 1,
      }}
      data={data.filter((item) => item.type === "team")}
      renderItem={({ item }) => <TeamResult item={item} />}
    />
  );
};

export default TeamResults;
