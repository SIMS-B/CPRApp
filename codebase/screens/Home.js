import { Button, StyleSheet, View, Dimensions } from "react-native";

const navigateToNumbersScreen = (props) => {
  props.navigation.navigate("NumbersScreen");
};
const navigateToTutorialHomeScreen = (props) => {
  props.navigation.navigate("TutorialHomeScreen");
};

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Button
        title="Call (Numbers)"
        onPress={() => navigateToNumbersScreen(props)}
      />

      <View style={styles.spacing} />

      <Button
        title="Tutorial (Self Administer)"
        onPress={() => navigateToTutorialHomeScreen(props)}
      />
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
  spacing: {
    width: Dimensions.get("window").width, // sets with to device's window width
    height: 30,
  },
});
