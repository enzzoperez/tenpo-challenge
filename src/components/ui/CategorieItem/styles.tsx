import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  overlayView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.overlayBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: 'white',
  },
});
