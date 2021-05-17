import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {
  const [loaded] = useFonts({
    'RalewayRegular': require('../assets/fonts/RalewayRegular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  const onPressHandler = () => {
    navigation.navigate('Game');
  }
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>NINO</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPressHandler}>
          <View style={styles.circle}>
          </View>
        </Pressable>
          <Text style={styles.buttonLabel}>Touch to start</Text>
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
  title: {
    color: '#FFF',
    fontFamily: "RalewayRegular",
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
