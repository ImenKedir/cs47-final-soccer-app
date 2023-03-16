import { Text, Card, Divider } from "@ui-kitten/components";

const TeamInfoCard = ({ item }) => {
  return (
    <Card style={{ flex: 1, width: "100%" }}>
      <Text>{"Name: " + item.entity.name}</Text>
      <Divider style={{ marginVertical: 8 }} />
      <Text>{"Gender: " + item.entity.gender}</Text>
    </Card>
  );
};

const TeamMoreInfo = ({ item, visible }) => {
  if (visible) {
    return <TeamInfoCard item={item} />;
  } else {
    return <></>;
  }
};

export default TeamMoreInfo;
