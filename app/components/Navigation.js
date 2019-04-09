import { createStackNavigator, createAppContainer } from "react-navigation";
//import the neccesary view (import [viewName] from "../views/[viewName]")
import HomeScreen from "../views/SuggestedPlanScreen"

const RootStack = createStackNavigator(
  {
    HomeScreen: {
        screen: HomeScreen
    },
  },
  {
    //add the initial route here
    initialRouteName: "HomeScreen",
    
  }
);

export default createAppContainer(RootStack);