import React from 'react';
import {View} from 'react-native';
import ActionsSection from '../ActionSection';
import HeaderContent from '../HeaderContent';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.root}>
      <ActionsSection />
      <HeaderContent />
    </View>
  );
};

export default Header;
