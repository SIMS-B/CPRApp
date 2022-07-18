// component imports
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";

// color imports
import colors from "../config/colors";

// import footer
import FooterComponent from "./FooterComponent";

// navigation functions
const navigateToNumbersScreen = (props) => {
  props.navigation.navigate("Contact Numbers");
};
const navigateToTutorialHomeScreen = (props) => {
  props.navigation.navigate("CPR Tutorial");
};

// screen layout
export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.innerContainer}>
          <StatusBar backgroundColor={colors.primary} />

          <ImageBackground
            style={styles.image}
            imageStyle={{ resizeMode: "contain" }}
            source={require("../assets/logo.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>OHCA - Pakistan</Text>
            <Text style={styles.subtitle}>
              This app provides you with all the necessary information on how to
              deal with out of hospital cardiac arrest patients. You can either
              get in contact with any of our representatives or access the
              tutorial to self administer CPR to the patient
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? colors.secondary : colors.primary,
                },
                styles.button,
              ]}
              onPress={() => navigateToNumbersScreen(props)}
            >
              <Text style={styles.buttonText}>Contact Numbers</Text>
            </Pressable>

            <View style={styles.spacing}>
              <Text style={styles.spacingText}>OR</Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? colors.secondary : colors.primary,
                },
                styles.button,
              ]}
              onPress={() => navigateToTutorialHomeScreen(props)}
            >
              <Text style={styles.buttonText}>CPR Tutorial</Text>
            </Pressable>
          </View>
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
    height: "100%",
    width: "100%",
  },
  textContainer: {
    width: "100%",
    padding: "5%",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  subtitle: {
    paddingTop: "2%",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "justify",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.2,
  },
  buttonsContainer: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 60,
    paddingRight: 60,
    // padding: 60,
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "400",
  },
  spacing: {
    width: "100%",
  },
  spacingText: {
    padding: "5%",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});
