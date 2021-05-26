import * as React from "react";
import { StyleSheet, View, Platform, Pressable, Animated } from 'react-native';
import {useState, useEffect, useRef, useContext} from "react";

export default function circleButton(props) {
  let timerApi = useRef(null);
  const [ignite, setIgnite] = useState(false);
  const igniteRef= useRef({});
  igniteRef.current = ignite;

  const scaleAnim = useRef(new Animated.ValueXY({x:1, y:1})).current;

  const growCirle = () => {
    Animated.timing(scaleAnim, {
      toValue: {x: 70, y:70},
      duration: 2000,
      useNativeDriver: true // Add This line
    }).start();
  };

  const shrinkCirle = () => {
    Animated.timing(scaleAnim, {
      toValue: {x: 0, y:0},
      duration: 200,
      useNativeDriver: true // Add This line
    }).start();
  };
  
  useEffect(() => {
    if(props.id == props.ignitedCircle && !igniteRef.current)
    {
      setIgnite(true);
      growCirle();
      console.log(">Ignite: "+  props.id);
      timerApi.current = setTimeout(() => {
        if(igniteRef.current)
        {
        console.log("Failed to tap "+props.id);
        props.gameOverHandler();
        }
      }, 2000);
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
          <Pressable onPress={onPressHandler}>
            <Animated.View style={styles.circle}>
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
    width: 1,
    height: 1,
    backgroundColor: '#FFF',
    position: 'absolute',
    borderRadius: 100,
    top: '50%',
    right:'50%',
    
  },
  
});