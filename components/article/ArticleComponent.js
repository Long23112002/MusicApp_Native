import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import img from '../../assets/img/imgbackground.png'
const ArticleComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.circleside}>
          <Image
            source={img}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 165,
    width: 330,
    height: 330,
    backgroundColor: '#FFECF2',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  circleside: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 155,
    width: 310,
    height: 310,
    backgroundColor: '#FFECF2',
    
  },
  image: {
    borderRadius: 155,
    width: '100%',
    height: '100%',
  },
});

export default ArticleComponent;
