import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
const NavBarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button}>
          <Svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M13.225 7.70129H1"
              stroke="#676767"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M7.1125 14.4026L1 7.7013L7.1125 1"
              stroke="#676767"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textstyle}>NOW PLAYING</Text>
      </View>

      <View  style={styles.view}>
        <TouchableOpacity style={styles.button}>
          <Svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M3.71429 6.50001C3.71429 5.98718 4.13002 5.57144 4.64286 5.57144H21.3571C21.87 5.57144 22.2857 5.98718 22.2857 6.50001C22.2857 7.01285 21.87 7.42858 21.3571 7.42858H4.64286C4.13002 7.42858 3.71429 7.01285 3.71429 6.50001Z"
              fill="#676767"
            />
            <Path
              d="M3.71429 13C3.71429 12.4872 4.13002 12.0714 4.64286 12.0714H21.3571C21.87 12.0714 22.2857 12.4872 22.2857 13C22.2857 13.5128 21.87 13.9286 21.3571 13.9286H4.64286C4.13002 13.9286 3.71429 13.5128 3.71429 13Z"
              fill="#676767"
            />
            <Path
              d="M4.64286 18.5714C4.13002 18.5714 3.71429 18.9872 3.71429 19.5C3.71429 20.0128 4.13002 20.4286 4.64286 20.4286H21.3571C21.87 20.4286 22.2857 20.0128 22.2857 19.5C22.2857 18.9872 21.87 18.5714 21.3571 18.5714H4.64286Z"
              fill="#676767"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  button: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  textstyle: {
    color:'#5A5A5A',
    fontWeight:'700',
    lineHeight:19,
    fontSize:15,
  },

  view:{
    padding: 20,
    
  }
});

export default NavBarComponent;
