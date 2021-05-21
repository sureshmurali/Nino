import * as React from "react";
import { StyleSheet, View, Platform, Pressable, Animated } from 'react-native';
import {useState, useEffect, useRef} from "react";

export default function circleButton(props) {
  let timerApi = null;
  const [ignite, setIgnite] = useState(false);
  const igniteRef= useRef({});
  const unmounted = useRef(false);
  igniteRef.current = ignite;

  useEffect(() => {
    if(props.gameOver && timerApi){
      clearTimeout(timerApi);
    }
    if(props.id == props.ignitedCircle && !igniteRef.current && !props.gameOver)
    {
      setIgnite(true);
      timerApi = setTimeout(() => {
        console.log("Unmounted: "+ unmounted.current);
        if(!props.gameOver && igniteRef.current && !unmounted.current)
        {
        console.log("Game Over "+  props.id+": "+props.gameOver); ;
        props.gameOverHandler();
        }
      }, 2000);
    }
    return () => { 
      console.log("Unmounted "+  props.id+" now");
      unmounted.current = true 
    }
  }, [props])

    const onPressHandler = () => {
        clearTimeout(timerApi);
        setIgnite(false);
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