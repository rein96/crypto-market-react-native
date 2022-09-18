import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  backButton: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      flexDirection: 'row',
    },
    backButton: {
      borderRadius: 8,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
