import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CryptocurrencyInterface, PriceDataInterface } from '../../../../types';
import { SvgUri } from 'react-native-svg';
import { usePriceChanges } from '../../../../hooks/usePriceChanges';
import { rupiahFormatter } from '../../../../utils';
import { colors } from '../../../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import createStyles from './CurrencyItem.style';

interface CurrencyItemPropsInterface {
  currency: CryptocurrencyInterface;
}

const CurrencyItem: React.FC<CurrencyItemPropsInterface> = ({ currency }) => {
  // Remove IDR Token
  if (currency.currencySymbol === 'Rp') return <View></View>;

  const { data: sortedPricePairData } = usePriceChanges();

  const styles = useMemo(() => createStyles(), []);

  /** symbol in lowercase | ex: 'btc' */
  const symbol = currency.currencySymbol.toLowerCase();

  const priceDetail: PriceDataInterface | undefined =
    sortedPricePairData?.[symbol];

  /** For now, set the default to 'day' */
  const selectedPercentage = priceDetail?.day || '0.00';

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

  const percentageStyles = useMemo(
    () => [styles.percentageText, { color: getColor() }],
    [getColor]
  );

  return (
    <TouchableOpacity style={styles.listContainer}>
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
        <View>
          <Text>{currency.name}</Text>
          <Text style={styles.currencySymbol}>{currency.currencySymbol}</Text>
        </View>

        {/* Right text container */}
        {priceDetail && (
          <View>
            <Text style={styles.priceText}>
              {rupiahFormatter(Number(priceDetail.latestPrice))}
            </Text>
            <View style={styles.percentageContainer}>
              <AntDesign
                name={getIconName()}
                color={getColor()}
                style={{ alignSelf: isPlus ? 'flex-end' : 'auto' }}
              />
              <Text style={percentageStyles}>{selectedPercentage}%</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CurrencyItem);
