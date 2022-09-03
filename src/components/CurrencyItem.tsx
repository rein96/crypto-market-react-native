import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { CryptocurrencyInterface } from '../types';

interface CurrencyItemPropsInterface {
  currency: CryptocurrencyInterface;
}

const CurrencyItem: React.FC<CurrencyItemPropsInterface> = ({ currency }) => {
  if (currency.currencySymbol === 'Rp') return <View></View>;
  return (
    <View style={styles.listContainer}>
      {/* Image */}
      <View>
        <Image
          source={{ uri: currency.logo }}
          style={{
            height: 32,
            width: 32,
            marginRight: 4,
            backgroundColor: 'yellow',
          }}
        />
      </View>

      {/* Content container */}
      <View style={styles.contentContainer}>
        {/* Left text container */}
        <View style={styles.leftContent}>
          <Text>{currency.name}</Text>
          <Text>{currency.currencySymbol}</Text>
        </View>

        {/* Right Price container */}
        <View style={styles.rightContent}>
          <Text>Rp 300.000.000</Text>
          <Text style={{ textAlign: 'right' }}>5.00%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    borderTopWidth: 1,
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
  leftContent: {
    // alignSelf: 'stretch',
    // flex: 1,
  },
  rightContent: {
    // alignSelf: 'stretch',
    // textAlign: 'right',
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'row',
  },
});

export default CurrencyItem;
