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
import TeamMoreInfo from "./TeamMoreInfo";

const TeamResultsHeader = ({ item }) => {
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
          padding: 8,
          borderRadius: 8,
        }}
        level="2"
      >
        <Text>{item.entity.nameCode}</Text>
        <Text>{item.entity.country.name}</Text>
      </Layout>
      <View style={{ marginVertical: 8 }} />
      <TeamMoreInfo item={item} visible={visible} />
      <View style={{ marginVertical: 8 }} />
      <ButtonGroup
        style={{ flex: 1, justifyContent: "space-between" }}
        appearance="outline"
      >
        <Button style={{ flex: 1 }} onPress={() => setVisible(!visible)}>
          {visible ? "Less" : "More"}
        </Button>
      </ButtonGroup>
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
