import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CryptocurrencyInterface, PriceDataInterface } from '../types';
import { SvgUri } from 'react-native-svg';
import { usePriceChanges } from '../hooks/usePriceChanges';
import { rupiahFormatter } from '../utils';
import { colors } from '../constants';
import AntDesign from '@expo/vector-icons/AntDesign';

interface CurrencyItemPropsInterface {
  currency: CryptocurrencyInterface;
}

const CurrencyItem: React.FC<CurrencyItemPropsInterface> = ({ currency }) => {
  // Remove IDR Token
  if (currency.currencySymbol === 'Rp') return <View></View>;

  const { data: priceChangesResponseData } = usePriceChanges();

  const sortedPricePairData = priceChangesResponseData?.sortedPricePairData;

  /** symbol in lowercase | ex: 'btc' */
  const symbol = currency.currencySymbol.toLowerCase();

  const priceDetail: PriceDataInterface | undefined =
    sortedPricePairData?.[symbol];

  /** For now, set the default to 'day' */
  const selectedPercentage = priceDetail?.day;

  const isNegative = selectedPercentage?.[0] === '-';

  const isZero = selectedPercentage === '0.00';

  const isPlus = !isNegative && !isZero;

  const getIconName = () => {
    if (isNegative) return 'caretdown';

    if (isPlus) return 'caretup';

    return;
  };

  const getColor = () => {
    if (isNegative) return colors.ui.error;

    if (isPlus) return colors.ui.success;

    return;
  };

  return (
    <View style={styles.listContainer}>
      {/* Image */}
      <View>
        <SvgUri
          uri={currency.logo}
          color={currency.color}
          width={32}
          height={32}
        />
      </View>

      {/* Content container */}
      <View style={styles.contentContainer}>
        {/* Left text container */}
        <View style={styles.leftContent}>
          <Text>{currency.name}</Text>
          <Text style={styles.currencySymbol}>{currency.currencySymbol}</Text>
        </View>

        {/* Right text container */}
        {priceDetail && (
          <View style={styles.rightContent}>
            <Text>{rupiahFormatter(Number(priceDetail.latestPrice))}</Text>
            <View style={styles.percentageContainer}>
              <AntDesign
                name={getIconName()}
                color={getColor()}
                style={{ alignSelf: isPlus ? 'flex-end' : 'auto' }}
              />
              <Text style={[styles.percentageText, { color: getColor() }]}>
                {selectedPercentage}%
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  leftContent: {},
  rightContent: {},
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

export default CurrencyItem;
