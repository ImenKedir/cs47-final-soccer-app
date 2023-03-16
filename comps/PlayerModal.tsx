import {
  Text,
  Card,
  Divider,
  Layout,
  Button,
  Modal,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

const InfoCard = ({ item, setVisible }) => {
  return (
    <Card style={{ flex: 1, width: "100%" }}>
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
      <View style={{ height: 8 }} />
      <Button appearance="outline" onPress={() => setVisible(false)}>
        DISMISS
      </Button>
    </Card>
  );
};

const PlayerInfo = ({ item, visible, setVisible }) => {
  if (visible) {
    return <InfoCard item={item} setVisible={setVisible} />;
  } else {
    return <></>;
  }
};

export default PlayerInfo;
