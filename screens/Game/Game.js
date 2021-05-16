import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';
import CircleButton from './components/circleButton';

export default function GameScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.score}>2912</Text>
      <View style={styles.circleGrid}>
        <View style={styles.circleRow}>
          <CircleButton ignite={false}/>
          <CircleButton ignite={false}/>
          <CircleButton ignite={false}/>
        </View>
        <View style={styles.circleRow}>
          <CircleButton ignite={true}/>
          <CircleButton ignite={false}/>
          <CircleButton ignite={false}/>
        </View>
        <View style={styles.circleRow}>
          <CircleButton ignite={false}/>
          <CircleButton ignite={false}/>
          <CircleButton ignite={false}/>
        </View>
      </View>

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
    color: '#ADADAD',
    fontSize: 40,
    bottom: 30,
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
  },
  circleRow: {
    flexDirection: 'row',
  },
  circleGrid: {
    paddingTop: 90,
  }
});
