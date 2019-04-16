import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
//import the neccesary view (import [viewName] from "../views/[viewName]")
import Registration from "../views/Registration";
import Login from "../views/Login";

import HomeScreen from "../views/HomeScreen";
import SuggestedPlan from "../views/SuggestedPlanScreen";
import CreatePlanSelection from "../views/CreatePlanSelection";
import SelectPlanScreen from "../views/SelectPlanScreen";
import CreatePlanScreen from "../views/CreatePlanScreen";
import AddExerciseScreen from "../views/AddExerciseScreen";
import WeeklyScheduleScreen from "../views/WeeklyScheduleScreen";
import PremadePlanScreen from "../views/PremadePlanScreen";

const RootStack = createStackNavigator({
  HomeScreen          : HomeScreen,
  SuggestedPlan       : SuggestedPlan,
  CreatePlanSelection : CreatePlanSelection,
  SelectPlanScreen    : SelectPlanScreen,
  CreatePlanScreen    : CreatePlanScreen,
  AddExerciseScreen   : AddExerciseScreen,
  WeeklyScheduleScreen: WeeklyScheduleScreen,
  PremadePlanScreen   : PremadePlanScreen
});
const LoginStack = createStackNavigator({
  Login       : Login,
  Registration: Registration
});

export default createAppContainer(
  createSwitchNavigator(
    {
      RootStack : RootStack,
      LoginStack: LoginStack
    },
    {
      initialRouteName: "LoginStack"
    }
  )
);
