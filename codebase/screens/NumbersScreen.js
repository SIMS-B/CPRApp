// component imports
import { StyleSheet, View, Text } from "react-native";

// color imports
import colors from "../codebase/config/colors";

// screen layout
export default function Home(props) {
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
