// component imports
import { StyleSheet, View, Text, FlatList } from "react-native";

// color imports
import colors from "../config/colors";

// screen layout
export default function Home(props) {
  // contact numbers' db
  db = [
    { name: "Syed Shafaat Hussain", number: "0333 9606914", key: "1" },
    { name: "SIMS B.", number: "0336 9519321", key: "1" },
  ];

  return (
    <View style={styles.container}>
      <Text> Numbers Screen is here </Text>
    </View>
  );
}

// screen styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
