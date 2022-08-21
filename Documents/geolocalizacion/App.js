import React,{Component} from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoadingScreen from "./ekran/carga";
import HomeScreen from "./ekran/home";
import LoginScreen from "./ekran/login";



const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: HomeScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component() {
  render(){
  return <AppNavigator />;
}
}
