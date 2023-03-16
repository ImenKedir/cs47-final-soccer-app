import {
  Text,
  Card,
  Divider,
} from "@ui-kitten/components";

const PlayerInfoCard = ({ item }) => {
  return (
    <Card style={{ flex: 1, width: "100%" }}>
      <Text>{"Name: " + item.entity.name}</Text>
      <Divider style={{ marginVertical: 8 }} />
      <Text>{"Country: " + item.entity.country.name}</Text>
      <Divider style={{ marginVertical: 8 }} />
      <Text>{"Position: " + item.entity.position}</Text>
    </Card>
  );
};

const PlayerInfo = ({ item, visible }) => {
  if (visible) {
    return <PlayerInfoCard item={item} />;
  } else {
    return <></>;
  }
};

export default PlayerInfo;
