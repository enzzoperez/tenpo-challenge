import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import RatingPoints from '../RatingPoints';
import {styles} from './styles';

export interface IRestaurantItem {
  id: string | number;
  name: string;
  stars: number;
  delayTime: string;
  offPercent: number;
  imgUrl: string;
  onPress: () => void;
}

const RestaurantItem: React.FC<IRestaurantItem> = ({
  name,
  stars,
  delayTime,
  offPercent,
  imgUrl,
  onPress = () => {},
}) => {
  const OffCircle = () => (
    <View style={styles.offCircle}>
      <Text style={styles.textOffCircle}>{offPercent}%</Text>
      <Text style={styles.textOffCircle}>DCTO</Text>
    </View>
  );

  return (
    <TouchableOpacity style={styles.root} onPress={() => onPress()}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <OffCircle />
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.infoContainer}>
        <RatingPoints stars={stars} />
        <Text numberOfLines={1}>{delayTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
