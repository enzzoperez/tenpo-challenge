import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import LocationIcon from '../Icons/Location';
import {styles} from './styles';

interface Props {
  direction?: string;
  extraStyles?: ViewStyle[];
}

const DirectionContainer: React.FC<Props> = ({
  direction,
  extraStyles = [{}],
}) => {
  return (
    <View style={[styles.root, ...extraStyles]}>
      <LocationIcon />
      <Text style={styles.titleFont}>
        {direction || 'Agregar dirección de entrega'}
      </Text>
    </View>
  );
};

export default DirectionContainer;
