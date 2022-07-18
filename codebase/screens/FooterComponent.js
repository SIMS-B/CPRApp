// component imports
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from "react-native";

// import icons
import FontAwesome from "@expo/vector-icons/FontAwesome";

// import linking module to redirect to social media apps
import * as Linking from "expo-linking";

// color imports
import colors from "../config/colors";

// screen layout
export default function FooterComponent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor={colors.primary} />

        <View style={styles.textContainer}>
          <Text style={styles.footerText}>Follow Us</Text>
        </View>

        <View style={styles.icons}>
          <FontAwesome.Button
            name="globe"
            backgroundColor={colors.primary}
            onPress={() => Linking.openURL("https://www.ohcapak.org/")}
          />
          <FontAwesome.Button
            name="instagram"
            backgroundColor={colors.primary}
            onPress={() => Linking.openURL("https://www.instagram.com/ohcapak")}
          />
          <FontAwesome.Button
            name="facebook"
            backgroundColor={colors.primary}
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/Out-Of-Hospital-Cardiac-Arrest-Pakistan-Chapter-102819167896233/"
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// screen styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  textContainer: {
    paddingLeft: "3%",
  },
  footerText: {
    width: "100%",
    fontSize: 18,
    fontWeight: "400",
    color: colors.white,
  },
  icons: {
    height: "100%",
    width: "100%",
    flexDirection: "row-reverse",
    position: "absolute",
  },
});
