import { StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../constants';

interface Style {
  container: ViewStyle;
  headingText: TextStyle;
  navigation: ViewStyle;
  categoryContainer: ViewStyle;
  iconsContainer: ViewStyle;
  staro: TextStyle;
  list: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: colors.bg.primary,
    },
    headingText: {
      fontWeight: '700',
      fontSize: 28,
    },
    navigation: {
      padding: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryContainer: {
      marginLeft: 16,
      marginBottom: 16,
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    staro: {
      marginRight: 12,
    },
    list: {
      flex: 1,
    },
  });
};
