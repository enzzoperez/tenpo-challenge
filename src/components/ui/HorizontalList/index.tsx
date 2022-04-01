import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  titleList: string;
  data: object[];
  renderItem: ({item}: {item: any}) => any;
}

const HorizontalList: React.FC<Props> = ({titleList, data, renderItem}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.titleText}>{titleList}</Text>
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

export default HorizontalList;
