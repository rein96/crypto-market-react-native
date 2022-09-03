import { useQuery } from '@tanstack/react-query';
import { UPDATE_PRICE_INTERVAL } from '../constants';
import endpoints from '../networks/endpoints';
import {
  PriceChangesResponseInterface,
  PriceDataInterface,
  SortedPricePairInterface,
} from '../types';

const fetchPriceChanges = async () => {
  const URL = endpoints.tradePriceChanges;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Fetching Error');
  }
  const responseJson = await response.json();
  const pricePairList: PriceDataInterface[] = responseJson?.payload;

  /**
   * Grouping into symbol object
   * pattern: { "BTC": { pair, latestPrice, ... } }
   *  */
  const groupingObject: SortedPricePairInterface = {};
  pricePairList?.forEach(function (priceData) {
    /** Ex: from 'btc/idr' to 'btc' */
    const symbol = priceData.pair.split('/')?.[0];
    return (groupingObject[symbol] = priceData);
  });

  // returning the responseJson + sortedPricePairData
  return { ...responseJson, sortedPricePairData: groupingObject };
};

/** Get list of price changes from trade/price-changes */
const usePriceChanges = () => {
  return useQuery<PriceChangesResponseInterface>(
    [endpoints.tradePriceChanges],
    () => fetchPriceChanges(),
    {
      staleTime: UPDATE_PRICE_INTERVAL, // ms
      refetchInterval: UPDATE_PRICE_INTERVAL,
    }
  );
};

export { usePriceChanges, fetchPriceChanges };
