import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddNewBook from "../screens/AddOrChangeBook";

const Stack = createNativeStackNavigator();
const MainStackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        nitialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNewBook" component={AddNewBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigations;
