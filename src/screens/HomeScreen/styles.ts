import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const styles = StyleSheet.create({
  curvedCard: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingBottom: 20,
  },

  one: {
    height: 150,
    backgroundColor: 'pink',
  },

  body: {
    paddingTop: 40,
    paddingLeft: 16,
    backgroundColor: theme.colors.white,
  },
});
