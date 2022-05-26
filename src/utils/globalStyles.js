import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from './colors';

export const globalStyles = EStyleSheet.create({
  text: {
    color: COLORS.foreground,
    fontFamily: 'FiraSansCondensed-Bold',
  },
  button: {
    width: EStyleSheet.value('8rem'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.foreground,
    color: COLORS.background,
    borderRadius: '0.8rem',
    paddingVertical: '1rem',
    paddingHorizontal: '1.2rem',
  },
  input: {
    color:COLORS.foreground,
    margin: '0.5rem',
    padding: '1rem',
    backgroundColor: COLORS.bgSecondary,
    width: '18rem',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    fontFamily: 'Poppins-Light',
    borderRadius: '1.1rem',
  },
});
