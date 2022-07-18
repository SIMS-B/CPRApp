// navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// component imports
import { StyleSheet } from "react-native";

// screen imports
import Home from "./codebase/screens/Home";
import NumbersScreen from "./codebase/screens/NumbersScreen";
import TutorialHomeScreen from "./codebase/screens/TutorialHomeScreen";

// color imports
import colors from "./codebase/config/colors";

// navigation stack
const Stack = createNativeStackNavigator();

// routing setup for the entire app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerStyle={{ backgroundColor: "red" }}
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen
          name="Home Page"
          component={Home}
          options={{
            headerTitleStyle: styles.headerTitle,
            headerTintColor: colors.white,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name="Contact Numbers"
          component={NumbersScreen}
          options={{
            headerTitleStyle: styles.headerTitle,
            headerTintColor: colors.white,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name="CPR Tutorial"
          component={TutorialHomeScreen}
          options={{
            headerTitleStyle: styles.headerTitle,
            headerTintColor: colors.white,
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "600",
  },
});
