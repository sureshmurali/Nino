import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';

export default function GameScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.score}>0</Text>
     
        <Pressable onPress={onPressHandler}>
          <View style={styles.circle}>
          </View>
        </Pressable>

    <StatusBar style="auto" />
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  score: {
    color: '#FFF',
    fontSize: 70,
    bottom: 30,
    fontWeight: '100',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 280,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderColor: '#FFF',
    borderWidth: 6,
    borderRadius: 100,
  },
  buttonLabel: {
    paddingTop: 15,
    color: '#FFF',
    fontSize: 18,
  }
});
