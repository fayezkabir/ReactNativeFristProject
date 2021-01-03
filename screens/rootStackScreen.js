import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./signin"
import SignUpScreen from "./signup"
import SplashScreen from "./splashScreen"


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        </RootStack.Navigator>
    );
}

export default RootStackScreen;