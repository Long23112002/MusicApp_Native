import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import next from '../../../assets/img/next1.png'
import pre from '../../../assets/img/pre.png'
import play from '../../../assets/img/play.png'
import { Svg, Path } from "react-native-svg";

const FooterComponents = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.image} source={pre}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Footer</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Footer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent: 'space-around',
      paddingTop: 25,
  },
   button:{
      width: 90,
      height: 90,
      borderWidth: 1,
      borderColor:'transparent',
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {width: 1, height: 2},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 1,
   },
   
});
export default FooterComponents;
