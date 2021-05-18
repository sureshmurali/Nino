import * as React from "react";
import { StyleSheet, View, Platform, Pressable, Animated } from 'react-native';
import {useState, useEffect, useRef} from "react";

export default function circleButton(props) {
  const [ignite, setIgnite] = useState(false);
  const igniteRef= useRef({});
  igniteRef.current = ignite;

  useEffect(() => {
    if(props.id == props.ignitedCircle && !ignite)
    {
      // Animated.timing
      setIgnite(true);
      const interval = setTimeout(() => {
      setIgnite(false);
    }, 2000);
  }
}, [props])

  const onPressHandler = () => {
      setIgnite(false);
      props.onClickHandler();
  }
  return ( 
        <Pressable onPress={onPressHandler}>
          <Animated.View style={igniteRef.current? styles.circleIgnite : styles.circle}>
          </Animated.View>
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
    backgroundColor: '#FFF',
    borderWidth: 8,
    borderRadius: 100,
  },
});