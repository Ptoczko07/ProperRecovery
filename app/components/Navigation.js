import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
//import the neccesary view (import [viewName] from "../views/[viewName]")
import SuggestedPlan from "../views/SuggestedPlanScreen";
import HomeScreen from "../views/HomeScreen";
import CreatePlan from "../views/CreatePlanSelection";
import Registration from "../views/Registration";
import Login from "../views/Login";

//Patryks stuff
import CreatePlanSelection from "../views/CreatePlanSelection";
import SelectPlanScreen from "../views/SelectPlanScreen";
import CreatePlanScreen from "../views/CreatePlanScreen";
import AddExerciseScreen from "../views/AddExerciseScreen";

const RootStack = createStackNavigator({
  HomeScreen: HomeScreen,
  SuggestedPlan: SuggestedPlan,
  CreatePlanSelection: CreatePlanSelection,
  SelectPlanScreen: SelectPlanScreen,
  CreatePlanScreen: CreatePlanScreen,
  AddExerciseScreen: AddExerciseScreen
});
const LoginStack = createStackNavigator({
  Login: Login,
  Registration: Registration
});

export default createAppContainer(
  createSwitchNavigator(
    {
      RootStack: RootStack,
      LoginStack: LoginStack
    },
    {
      initialRouteName: "LoginStack"
    }
  )
);
