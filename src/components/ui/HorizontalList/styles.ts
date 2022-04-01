import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    marginBottom: 48,
  },
  titleText: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    fontSize: 20 / PixelRatio.getFontScale(),
    marginBottom: 16,
    color: theme.colors.black,
  },
});
