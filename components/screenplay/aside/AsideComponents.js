import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AsideComponents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view_top}>
        <Text style={styles.text_top}>Cruel Summer</Text>
      </View>
      <View style={styles.view_aside}>
        <Text style={styles.text_bottom}>Taylor Swift</Text>
      </View>
     <View style={styles.view_bottom}>
      <View style={styles.timesilder}>
          <Text style={styles.textTimeStart}>2:30</Text>
          <Text style={styles.textTimeEnd}>2:60</Text>
      </View >
        <Slider
          style={styles.customSlider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#fff"
          thumbTintColor="white" 
          maximumTrackTintColor="#EDA9CA"
          trackStyle={styles.customTrackStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFECF2",
    alignItems: "center",
  },
  text_top: {
    color: "black",
    fontWeight: "700",
    fontSize: 25,
  },
  text_bottom: {
    paddingTop: 7,
    color: "black",
    fontWeight: "500",
    fontSize: 15,
  },
  view_top: {
    marginTop: 8,
  },
  view_aside: {
    marginTop: 2,
  },
  timesilder: {
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textTimeStart:{
    paddingLeft: 10,
  },
  textTimeEnd:{
    paddingRight: 12,
  },
  customSlider: {
    width: 300,
    height: 20,
    borderRadius: 10,
  },
  customTrackStyle:{
    height: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  }
  
});

export default AsideComponents;
