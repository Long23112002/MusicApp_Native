import React from "react";
import { Text, View } from "react-native";
import {StyleSheet} from 'react-native';
import NavBarComponent from "./screenplay/navbar/NavbarComponent";
import ArticleComponent from "./screenplay/article/ArticleComponent";
import AsideComponents from "./screenplay/aside/AsideComponents";
import FooterComponents from "./screenplay/footer/FooterComponents";

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
        <AsideComponents/>
      </View>

      <View style={styles.footer}>
        <FooterComponents/>
      </View>
      

    </View>
  ); 
};
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
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
    },
    footer:{
        height: '20.33%',
        backgroundColor: '#FFECF2',
    },
   
  })
export default Main;
