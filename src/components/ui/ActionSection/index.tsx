import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import SearchIcon from '../Icons/Search';
import {styles} from './styles';

const IMG_URL =
  'https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg';

const ActionsSection = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Image source={{uri: IMG_URL}} style={styles.profileImage} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ActionsSection;
