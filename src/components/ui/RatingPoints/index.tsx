import React from 'react';
import {Text, View} from 'react-native';
import StarRatingIcon from '../Icons/StarRating';
import {styles} from './styles';

interface Props {
  stars: number;
}

const RatingPoints: React.FC<Props> = ({stars}) => {
  return (
    <View style={styles.infoContainer}>
      <Text numberOfLines={1}>
        <StarRatingIcon />
        {stars}
      </Text>
    </View>
  );
};

export default RatingPoints;
