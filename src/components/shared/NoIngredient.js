import React from 'react'
import {View, Text, Image, StyleSheet} from "react-native"
import {assets} from "../../definitions/assets";

const NoIngredient = ({text}) => {
  return (
    <View style={styles.mainView}>
      <Image source={assets.hamburger} style={styles.image}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
};



export default NoIngredient;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    tintColor: 'rgba(0,0,0,0.2)',
    width: 200,
    height: 200,
    marginBottom: 20
  },

  text: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 25
  }
});
