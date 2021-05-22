import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, Pressable } from 'react-native';
import CircleButton from './components/circleButton';

export default function GameScreen({navigation}) {
  let timer = useRef(null);
  const circleCount = 12;
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameOverRef= useRef({});
  const [randomCircleID, setRandomCircle] = useState(0);
  const randomRef= useRef({});
  randomRef.current = randomCircleID;
  gameOverRef.current = gameOver;

  useEffect(() => {
    console.log('timer start')
    timer.current = setInterval(() => {
      let num = selectRandomCircle();
      setRandomCircle(num); 
      console.log('Roll: '+ num);
    }, 750);
    return () => {
      console.log('Game component unmounted');
      clearInterval(timer.current);
    }
  }, []);

  const updateScore = () => {
    setScore(score => score+1);
  };

  const gameOverHandler = () => {
    
    if(!gameOverRef.current)
    {
      clearInterval(timer.current);
      setGameOver(true); 
      console.log('Game over in Game.js!!!');
    
      navigation.reset({
        
        index: 0,
        routes: [{ name: 'GameOver' }],
      });

    }
  };

  const selectRandomCircle = () => {
    let randomID = -1;
    do{
      randomID = Math.floor(Math.random() * circleCount)+1;
      if(randomID == randomRef.current) {console.log("strike "+ randomID);}
    } while(randomID === randomRef.current)
    return randomID;
  }

  return (
    <SafeAreaView style={styles.container}>
    
    <Text style={styles.score}>{"score_"+score}</Text>
    <Text style={styles.score}>{"randomCircleID_"+randomCircleID}</Text>
    {/* {!gameOver && */}
      <View style={styles.circleGrid}>
        <View style={styles.circleRow}>
          <CircleButton id={1} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={2} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={3} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
        </View>
        <View style={styles.circleRow}>
          <CircleButton id={4} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={5} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={6} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
        </View>
        <View style={styles.circleRow}>
          <CircleButton id={7} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={8} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={9} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
        </View>
        <View style={styles.circleRow}>
          <CircleButton id={10} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={11} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
          <CircleButton id={12} ignitedCircle={randomCircleID} onClickHandler={updateScore} gameOverHandler={gameOverHandler}/>
        </View>
      </View>
    {/* } */}

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
  buttonLabel: {
    paddingTop: 15,
    color: '#FFF',
    fontSize: 18,
  },
  circleRow: {
    flexDirection: 'row',
  },
  circleGrid: {
    paddingTop: 80,
  }
});
