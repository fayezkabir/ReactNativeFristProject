/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from "./screens/mainTabScreen";


import SupportScreen from "./screens/support"
import SettingScreen from "./screens/settings"
import BookMarkScreen from "./screens/bookmark"


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import { DrawerContent } from "./screens/drawerContent";


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Bookmark" component={BookMarkScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;




{/* <Stack.Navigator 
      screenOptions={{
          headerStyle : {
            backgroundColor : "#009387",
          },
          headerTintColor : "#fff",
          headerTitleStyle : {
            fontWeight : "bold", 
          }
      }}
      >
        <Stack.Screen
        options={{
          title : "Home",  
        }}
        name="Home" component={HomeScreen} />
        <Stack.Screen 
        options={{
          title : "details"
        }}
        name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}

