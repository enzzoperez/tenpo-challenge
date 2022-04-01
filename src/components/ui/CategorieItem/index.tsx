import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export interface ICategorieItem {
  name: string;
  imgUrl: string;
  onPress: () => void;
}

const CategorieItem: React.FC<ICategorieItem> = ({
  name,
  imgUrl,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ImageBackground source={{uri: imgUrl}} style={styles.image}>
        <View style={styles.overlayView}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategorieItem;
