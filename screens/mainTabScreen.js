

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';


import HomeScreen from "./home";
import DetailsScreen from "./details";
import ProfileScreen from "./profile";
import ExploreScreen from "./explore";



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#81ecec",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            }
        }}
    >
        <HomeStack.Screen
            options={{
                title: "Home Page",
                headerLeft: () => (
                    <AntDesign.Button name="menu-unfold" size={25} backgroundColor="#81ecec" onPress={() => {
                        navigation.openDrawer();
                    }} ></AntDesign.Button>
                )
            }}
            name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
)


const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#a29bfe",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            }
        }}
    >
        <DetailsStack.Screen
            options={{
                title: "Details page",
                headerLeft: () => (
                    <AntDesign.Button name="menu-unfold" size={25} backgroundColor="#a29bfe" onPress={() => {
                        navigation.openDrawer();
                    }} ></AntDesign.Button>
                )
            }}
            name="Details" component={DetailsScreen} />
    </DetailsStack.Navigator>
)


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor : "#81ecec",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor : "#a29bfe",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor : "#009387",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor : "#009387",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="wpexplorer" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


export default MainTabScreen;