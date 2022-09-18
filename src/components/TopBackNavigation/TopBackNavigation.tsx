import React, { useMemo } from 'react';
import { View, TouchableHighlight } from 'react-native';
import BackIcon from '../../icons/BackIcon';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../constants';
import createStyles from './TopBackNavigation.style';

/**
 * Back navigation component
 * Go back to previous stack/screen
 */
const TopBackNavigation = () => {
  const navigation = useNavigation();

  const styles = useMemo(() => createStyles(), []);

  const handleOnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor={colors.ui.tertiary}
        onPress={handleOnPress}
      >
        <BackIcon color='#333' size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default React.memo(TopBackNavigation);
