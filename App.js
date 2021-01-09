/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, ActivityIndicator, Text } from "react-native";
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

import RootStackScreen from "./screens/rootStackScreen";
import { AuthContext } from "./components/context";


const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signUp: () => {
      setIsLoading(false);
    },
    signIn: () => {
      setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

    }, 1500);
      setUserToken("dyghdh");
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken(null);
    },
  }),[]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);

  //   }, 3000);

  // }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={60} color="#009387" />
        <Text>Loading please Wait......</Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          userToken != null ?
            <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="Support" component={SupportScreen} />
              <Drawer.Screen name="Settings" component={SettingScreen} />
              <Drawer.Screen name="Bookmark" component={BookMarkScreen} />
            </Drawer.Navigator>
            :

            <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
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

