import * as React from "react";
import { StyleSheet, View, Platform, Pressable, Animated, Easing } from 'react-native';
import {useState, useEffect, useRef, useContext} from "react";


export default function circleButton(props) {
  let timerApi = useRef(null);
  let gameOver = useRef(false);
  const [ignite, setIgnite] = useState(false);
  const igniteRef= useRef({});
  igniteRef.current = ignite;
  const scaleAnim = useRef(new Animated.ValueXY({x:0, y:0})).current;
  const scaleBorderAnim = useRef(new Animated.ValueXY({x:1, y:1})).current;

  const bombTime = 2000;

  const growCirle = () => {
    Animated.timing(scaleAnim, {
      toValue: {x: 7, y:7},
      duration: bombTime,
      easing:  Easing.bounce,
      useNativeDriver: true // Add This line
    }).start();
  };

  const shrinkCirle = () => {
    Animated.timing(scaleAnim, {
      toValue: {x: 0, y:0},
      duration: bombTime/20,
      easing: Easing.bounce,
      useNativeDriver: true // Add This line
    }).start();
  };

  const growBorder = () => {
    Animated.timing(scaleBorderAnim, {
      toValue: {x: 40, y:40},
      duration:3000,
      easing:  Easing.bounce,
      useNativeDriver: true // Add This line
    }).start();
  };
  
  useEffect(() => {
    if(props.id == props.ignitedCircle && !igniteRef.current && !gameOver.current)
    {
      setIgnite(true);
      growCirle();
      console.log(">Ignite: "+  props.id);
      timerApi.current = setTimeout(() => {
        if(igniteRef.current)
        {
        gameOver.current = true;
        console.log("Failed to tap "+props.id);
        growBorder();
        props.gameOverHandler();
        }
      }, bombTime);
    }
  }, [props.ignitedCircle])

  

  const onPressHandler = () => {
        console.log(">>>>>>>>>>>>>>Tap: "+  props.id+"");
        setIgnite(false);
        console.log(">Put off Ignite: "+  props.id);
        clearTimeout(timerApi.current);
        shrinkCirle();
        console.log("Cleared "+ props.id + " interval");
        props.onClickHandler();
    }
    return ( 
          <Pressable onPress={onPressHandler} style={[styles.test]}>
            <Animated.View style={[styles.circle,{transform: [
                {scaleX: scaleBorderAnim.x,},
                { scaleY: scaleBorderAnim.y,},
              ]}
            ]}>
            </Animated.View>
            <Animated.View style={[styles.bloom
            ,{transform: [
                {scaleX: scaleAnim.x,},
                { scaleY: scaleAnim.y,},
              ]}
            ]}
            ></Animated.View>
            
          </Pressable>
    );
  }

const styles = StyleSheet.create({
  circle: {
    width: 90,
    height: 90,
    margin: 10,
    borderColor: '#D2D2D2',
    borderWidth: 8,
    borderRadius: 100,
  },
  circleIgnite: {
    width: 90,
    height: 90,
    margin: 10,
    borderColor: '#D2D2D2',
    borderWidth: 8,
    borderRadius: 100,
    backgroundColor: '#FFF',
  },
  circleGameOver: {
    width: 90,
    height: 90,
    margin: 10,
    borderColor: '#D2D2D2',
    borderWidth: 8,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  bloom: {
    width: 10,
    height: 10,
    backgroundColor: '#FFF',
    position: 'absolute',
    borderRadius: 10,
    top: '45.5%',
    left: '45.5%',
  },
  
});