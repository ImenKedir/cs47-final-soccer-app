import {
  Card,
  Divider,
  Layout,
  List,
  Text,
  Button,
  ButtonGroup,
  Modal,
} from "@ui-kitten/components";
import { useState } from "react";

const PlayerResult = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Card style={{ borderRadius: 16, marginTop: 16, marginHorizontal: 32 }}>
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        <Text category="h4">{item.entity.name}</Text>
        <Text category="h4">{item.entity.position}</Text>
      </Layout>
      <Divider style={{ marginVertical: 8 }} />
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
      <Layout style={{ marginVertical: 8 }} />
      <ButtonGroup
        style={{ flex: 1, justifyContent: "space-between" }}
        appearance="outline"
      >
        <Button style={{ flex: 1 }} onPress={() => setVisible(true)}>
          More
        </Button>
        <Button style={{ flex: 1 }}>Save</Button>
      </ButtonGroup>
      {/* This is the popover with the player's info */}
      <Modal
        style={{ flex: 1, width: "100%", marginHorizontal: 8 }}
        visible={visible}
      >
        <Card disabled={true} style={{ flex: 1 }}>
          <Layout
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 4,
            }}
          >
            <Text category="h4">{item.entity.name}</Text>
            <Text category="h4">{item.entity.position}</Text>
          </Layout>
          <Divider style={{ marginVertical: 8 }} />
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
          <Layout style={{ marginVertical: 8 }} />
          <Button appearance="outline" onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
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
