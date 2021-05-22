import * as React from "react";
import { StyleSheet, View, Platform, Pressable, Animated } from 'react-native';
import {useState, useEffect, useRef, useContext} from "react";

export default function circleButton(props) {
  let timerApi = useRef(null);
  const [ignite, setIgnite] = useState(false);
  const igniteRef= useRef({});
  igniteRef.current = ignite;

  useEffect(() => {
    if(props.id == props.ignitedCircle && !igniteRef.current)
    {
      setIgnite(true);
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
        console.log("Cleared "+ props.id + " interval");
        props.onClickHandler();
    }
    return ( 
          <Pressable onPress={onPressHandler}>
            <Animated.View style={igniteRef.current? styles.circleIgnite : styles.circle}>
            </Animated.View>
            {/* <Animated.View style={styles.bloom}></Animated.View> */}
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
    width: 20,
    height: 20,
    backgroundColor: '#FFF',
    margin: -10,
    position: 'absolute',
    borderRadius: 100,
    top: '50%',
    right:'50%',
  },
  
});