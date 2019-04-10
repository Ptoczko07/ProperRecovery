import { createStackNavigator, createAppContainer } from "react-navigation";
//import the neccesary view (import [viewName] from "../views/[viewName]")
import SuggestedPlan from "../views/SuggestedPlanScreen";
import HomeScreen from "../views/HomeScreen";
import CreatePlan from "../views/CreatePlanSelection";

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    SuggestedPlan: SuggestedPlan,
    CreatePlan: CreatePlan
  },
  {
    //add the initial route here
    initialRouteName: "HomeScreen"
  }
);

export default createAppContainer(RootStack);
