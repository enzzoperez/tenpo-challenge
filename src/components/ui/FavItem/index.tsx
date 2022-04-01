import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RatingPoints from '../RatingPoints';
import {IRestaurantItem} from '../RestaurantItem';
import {styles} from './styles';

export interface IFavItem extends IRestaurantItem {
  description?: string;
  bannerUrl: string;
}

const FavItem: React.FC<IFavItem> = ({
  description,
  bannerUrl,
  name,
  imgUrl,
  stars,
  delayTime,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={() => onPress()}>
      <ImageBackground style={styles.image} source={{uri: bannerUrl}}>
        <View style={styles.overlayView}>
          <Image source={{uri: imgUrl}} style={styles.logo} />
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.horizontalText}>
          <Text>{description}</Text>
          <RatingPoints stars={stars} />
        </View>
        <View style={styles.horizontalText}>
          <Text style={styles.nameText}>{name}</Text>
          <Text>{delayTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavItem;
