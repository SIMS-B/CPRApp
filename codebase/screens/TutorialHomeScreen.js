// component imports
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

// color imports
import colors from "../config/colors";

// import footer
import FooterComponent from "./FooterComponent";

// screen layout
export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.innerContainer}>
          <StatusBar backgroundColor={colors.primary} />

          <Text> Tutorial Home Screen is here </Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <FooterComponent></FooterComponent>
      </View>
    </SafeAreaView>
  );
}

// screen styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 5,
  },
  footerContainer: {
    flex: 0.3,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
  },
});
