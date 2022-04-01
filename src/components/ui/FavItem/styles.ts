import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    marginBottom: 5,
    elevation: 3,
    marginRight: 16,
    width: 250,
    borderRadius: 10,
  },
  image: {
    height: 125,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    overflow: 'hidden',
  },
  logo: {
    height: 48,
    width: 48,
    borderRadius: 10,
  },
  overlayView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  nameText: {
    color: theme.colors.primaryGreen,
    fontFamily: 'Roboto-Bold',
  },
  infoContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 65,
    justifyContent: 'space-between',
  },
  horizontalText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
