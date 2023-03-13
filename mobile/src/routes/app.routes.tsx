import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Habit } from "../screens/Habit";
import { Home } from "../screens/Home";
import { NewHabit } from "../screens/NewHabit";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Habit" component={Habit} />
      <Screen name="NewHabit" component={NewHabit} />
    </Navigator>
  )
}