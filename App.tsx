import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';
import HomeScreen from './screens/Home';
import GameScreen from './screens/Game/Game';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.appStyle}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  appStyle: { flex: 1, backgroundColor: "#000" }
});

export default App;
