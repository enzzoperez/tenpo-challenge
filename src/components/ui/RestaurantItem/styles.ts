import {PixelRatio, StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    paddingRight: 8,
    paddingTop: 8,
    width: 128,
  },
  offCircle: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  textOffCircle: {
    color: theme.colors.white,
    fontSize: 10 / PixelRatio.getFontScale(),
    fontFamily: 'Roboto-Regular',
  },
  image: {
    borderRadius: 20,
    height: 128,
    width: 128,
    position: 'relative',
    backgroundColor: theme.colors.white,
  },
  textName: {
    color: theme.colors.black,
    fontSize: 16 / PixelRatio.getFontScale(),
    fontFamily: 'Roboto-Light',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
