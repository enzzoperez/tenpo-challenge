import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const size = {
  fontSize: 50 / PixelRatio.getFontScale(),
  fontFamily: 'Roboto-Bold',
  lineHeight: 50,
};

export const styles = StyleSheet.create({
  blackText: {
    ...size,
    color: theme.colors.black,
  },
  greenText: {
    ...size,
    color: theme.colors.primaryGreen,
  },
  descriptionText: {
    fontSize: 16 / PixelRatio.getFontScale(),
    fontFamily: 'Roboto-Bold',
    lineHeight: 16,
    color: theme.colors.black,
    letterSpacing: 3,
  },
  rootContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  animationContainer: {
    height: 130,
    width: 100,
    resizeMode: 'contain',
    position: 'absolute',
  },
  handImage: {
    height: 200,
    width: 180,
    resizeMode: 'contain',
    position: 'relative',
  },
});