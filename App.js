import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";

import Home from "./codebase/screens/Home";
import NumbersScreen from "./codebase/screens/NumbersScreen";
import TutorialHomeScreen from "./codebase/screens/TutorialHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NumbersScreen" component={NumbersScreen} />
        <Stack.Screen
          name="TutorialHomeScreen"
          component={TutorialHomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
