import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";

//Screeens
import HomeScreen from "./src/screens/landing/Home";
import LogReg from "./src/screens/landing/LogReg";
import Login from "./src/screens/auth/Login";
import Regis from "./src/screens/auth/Register";
import Music from "./src/screens/DetailMusic";
import HomeMusic from "./src/screens/Home";

const Main = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Main.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#EE4622" },
            headerTintColor: "#FFFFFF",
          }}
        >
          <Main.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Main.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={LogReg}
          />
          <Main.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Main.Screen
            options={{ headerShown: false }}
            name="Regis"
            component={Regis}
          />
          <Main.Screen
            options={{ headerShown: false }}
            name="Music"
            component={Music}
          />
          <Main.Screen
            options={{ headerShown: false }}
            name="HomeMusic"
            component={HomeMusic}
          />
        </Main.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
