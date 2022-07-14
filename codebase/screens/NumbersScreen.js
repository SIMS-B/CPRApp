import { StyleSheet, View, Text } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text> Numbers Screen is here </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
