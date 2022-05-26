// In App.js in a new project

import React from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import SignupScreen from './screens/SignupScreen/SignupScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import NotificationScreen from './screens/NotificationScreen/NotificationScreen';
import DrawerNavigation from './navigation/DrawerNavigation/DrawerNavigation';

const Stack = createSharedElementStackNavigator();

function MainContainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        // ...MyTransition,
      }}
      initialRouteName="Splash">
      <Stack.Screen
        sharedElements={(route, otherRoute) => {
          return otherRoute.name === 'Base' ? null : ['logo'];
        }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        sharedElements={(route, otherRoute) => {
          return otherRoute.name === 'Base' ? null : ['logo'];
        }}
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        sharedElements={route => {
          return null;
        }}
        name="Base"
        component={DrawerNavigation}
      />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

export default MainContainer;
