import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options = {{
            header: () => null
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options = {{
            header: () => null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
