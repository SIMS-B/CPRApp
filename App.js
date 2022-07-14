// navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screen imports
import Home from "./codebase/screens/Home";
import NumbersScreen from "./codebase/screens/NumbersScreen";
import TutorialHomeScreen from "./codebase/screens/TutorialHomeScreen";

// navigation stack
const Stack = createNativeStackNavigator();

// routing setup for the entire app
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
