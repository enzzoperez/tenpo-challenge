import React, {useEffect, useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {styles} from './styles';

const HAND_IMG = require('../../../assets/images/hand.png');
const MOTORCYCLE_IMG = require('../../../assets/images/motorcycle.png');

const HeaderContent = () => {
  const moveRTL = useRef(new Animated.ValueXY({x: 30, y: -30})).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const moveMotorcycle = () => {
    Animated.parallel([
      Animated.timing(moveRTL, {
        toValue: {x: -40, y: 30},
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    moveMotorcycle();
  });

  return (
    <View style={styles.rootContent}>
      <View>
        <Text style={styles.blackText}>Tenpo</Text>
        <Text style={styles.greenText}>Eats</Text>
        <Text style={styles.descriptionText}>DELIVER APP</Text>
      </View>
      <View>
        <Animated.Image
          source={MOTORCYCLE_IMG}
          style={[
            styles.animationContainer,
            {opacity: animatedOpacity},
            {transform: moveRTL.getTranslateTransform()},
          ]}
        />
        <Image source={HAND_IMG} style={styles.handImage} />
      </View>
    </View>
  );
};

export default HeaderContent;
