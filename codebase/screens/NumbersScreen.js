// component imports
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Pressable,
} from "react-native";

// import linking module to make phone calls
import * as Linking from "expo-linking";

// import footer
import FooterComponent from "./FooterComponent";

// color imports
import colors from "../config/colors";

// screen layout
export default function Home(props) {
  // contact numbers' db
  const db = [
    { name: "Syed Shafaat Hussain", number: "0333 9606914", key: "1" },
    { name: "SIMS B.", number: "0336 9519321", key: "2" },
    { name: "Bilal Naseer", number: "0332 5107773", key: "3" },
    { name: "Syed Shafaat Hussain", number: "0333 9606914", key: "4" },
    { name: "SIMS B.", number: "0336 9519321", key: "5" },
    { name: "Bilal Naseer", number: "0332 5107773", key: "6" },
    { name: "Syed Shafaat Hussain", number: "0333 9606914", key: "7" },
    { name: "SIMS B.", number: "0336 9519321", key: "8" },
    { name: "Bilal Naseer", number: "0332 5107773", key: "9" },
  ];

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
            <Text style={styles.text}>
              You can contact any of the following representatives of OHCA -
              Pakistan and they will assist you with the situation
            </Text>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              data={db}
              renderItem={({ item }) => (
                <View style={styles.contactInfoContainer}>
                  <View style={styles.singleContactContainer}>
                    <Text style={styles.text}>{item.name} </Text>
                    <Text style={styles.text}>{item.number} </Text>
                    <View style={styles.buttonContainer}>
                      <Pressable
                        style={({ pressed }) => [
                          {
                            backgroundColor: pressed
                              ? colors.secondary
                              : colors.primary,
                          },
                          styles.button,
                        ]}
                        onPress={() => {
                          Linking.openURL(`tel:${item.number}`);
                        }}
                      >
                        <Text style={styles.buttonText}>Call</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              )}
            />
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
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.2,
  },
  textContainer: {
    width: "100%",
    padding: "5%",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "justify",
  },
  listContainer: {
    width: "100%",
    paddingBottom: "36%",
  },
  contactInfoContainer: {
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  singleContactContainer: {
    width: "100%",
    paddingBottom: "5%",
  },
  buttonContainer: {
    width: "100%",
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: "5%",
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
});
