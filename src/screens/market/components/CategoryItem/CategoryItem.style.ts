import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { colors } from '../../../../constants';

interface Style {
  categoryContainer: ViewStyle;
  categoryText: TextStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    categoryContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 8,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: colors.ui.primary,
      borderRadius: 50,
    },
    categoryText: {
      marginLeft: 8,
      fontSize: 12,
      color: colors.text.primary,
    },
  });
};
