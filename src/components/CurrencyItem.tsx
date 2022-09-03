import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { CryptocurrencyInterface, PriceDataInterface } from '../types';
import { SvgUri } from 'react-native-svg';
import { usePriceChanges } from '../hooks/usePriceChanges';
import { rupiahFormatter } from '../utils';
import { colors } from '../constants';

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

  const getTextStyles = () => {
    if (isNegative) return styles.redText;

    if (isPlus) return styles.greenText;

    return {};
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
            <Text style={[styles.percentageText, getTextStyles()]}>
              {selectedPercentage}%
            </Text>
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
  percentageText: {
    textAlign: 'right',
  },
  currencySymbol: {
    color: colors.text.secondary,
  },
  redText: {
    color: colors.text.error,
  },
  greenText: {
    color: colors.text.success,
  },
});

export default CurrencyItem;
