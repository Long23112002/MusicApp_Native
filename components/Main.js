import React from "react";
import { Text, View } from "react-native";
import {StyleSheet} from 'react-native';
import NavBarComponent from "./navbar/NavbarComponent";
import ArticleComponent from "./article/ArticleComponent";

const Main = () => {
 
  return (
    <View style={styles.container}>

      <View style={styles.headers}>
         <NavBarComponent/>
      </View>

      <View style={styles.article}>
        <ArticleComponent/>
      </View>


      <View style={styles.aside}>
        <Text>Main3</Text>
      </View>

      <View style={styles.footer}>
      <Text>Main3</Text>
    </View>
      

    </View>
  ); 
};
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    },
    headers:{
        width: '100%',
        height: '20.33%',
        backgroundColor: '#FFECF2',
    },
    article:{
        height: '46.33%',
        backgroundColor: '#FFECF2',
    },
    aside:{
        height: '19.33%',
        backgroundColor: 'purple',
    },
    footer:{
        height: '20.33%',
        backgroundColor: 'green',
    },
   
  })
export default Main;
