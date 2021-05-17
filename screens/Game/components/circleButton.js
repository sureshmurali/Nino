import * as React from "react";
import { StyleSheet, View, Platform, Pressable } from 'react-native';


export default function circleButton(props) {
  const onPressHandler = () => {
    props.onClickHandler();
  }
  return ( 
        <Pressable onPress={onPressHandler}>
          <View style={props.ignite? styles.circleIgnite : styles.circle}>
          </View>
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