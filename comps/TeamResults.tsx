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

const TeamResults = ({ data }) => {
  return (
    <List
      style={{
        flex: 1,
      }}
      data={data.filter((item) => item.type === "team")}
      renderItem={({ item }) => (
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
            <Text>{item.entity.nameCode}</Text>
            <Text>{item.entity.country.name}</Text>
          </Layout>
          <View style={{ marginVertical: 8 }} />
          <ButtonGroup
            style={{ flex: 1, justifyContent: "space-between" }}
            appearance="outline"
          >
            <Button style={{ flex: 1 }}>More</Button>
            <Button style={{ flex: 1 }}>Save</Button>
          </ButtonGroup>
        </Card>
      )}
    />
  );
};

export default TeamResults;
