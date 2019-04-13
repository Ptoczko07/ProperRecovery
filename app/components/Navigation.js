import { createStackNavigator, createAppContainer } from "react-navigation";
//import the neccesary view (import [viewName] from "../views/[viewName]")
import SuggestedPlan from "../views/SuggestedPlanScreen";
import HomeScreen from "../views/HomeScreen";
import CreatePlanSelection from "../views/CreatePlanSelection";
import SelectPlanScreen from "../views/SelectPlanScreen";

const RootStack = createStackNavigator(
  {
    HomeScreen         : HomeScreen,
    SuggestedPlan      : SuggestedPlan,
    CreatePlanSelection: CreatePlanSelection,
    SelectPlanScreen   : SelectPlanScreen
  },
  {
    //add the initial route here
    initialRouteName: "HomeScreen"
  }
);

export default createAppContainer(RootStack);
