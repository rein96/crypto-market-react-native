import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../../../constants';

interface Style {
  listContainer: ViewStyle;
  contentContainer: ViewStyle;
  priceText: TextStyle;
  percentageContainer: ViewStyle;
  percentageText: TextStyle;
  currencySymbol: TextStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    listContainer: {
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: colors.ui.primary,
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
    },
    contentContainer: {
      paddingLeft: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    priceText: {
      textAlign: 'right',
    },
    percentageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    percentageText: {
      textAlign: 'right',
      marginLeft: 4,
    },
    currencySymbol: {
      color: colors.text.secondary,
    },
  });
};
