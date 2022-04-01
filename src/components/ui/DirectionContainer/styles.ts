import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondaryGreen,
  },
  titleFont: {
    fontSize: 18 / PixelRatio.getFontScale(),
    color: theme.colors.primaryGreen,
    fontFamily: 'Roboto-Regular',
    marginLeft: 8,
  },
});
