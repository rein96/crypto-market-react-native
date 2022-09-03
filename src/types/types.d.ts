// node_modules/@expo/vector-icons/build/AntDesign.d.ts
import type AntDesignIconNameType from '@expo/vector-icons/build/AntDesign';
export interface PriceDataInterface {
  pair: string;
  latestPrice: string;
  day: null | string;
  week: null | string;
  month: null | string;
  year: null | string;
}

export interface CryptocurrencyInterface {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: WalletInterface[];
}

export interface SortedPricePairInterface {
  [key: string]: PriceDataInterface;
}

interface WalletInterface {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

/**
 * T is required generic
 * U is optional generic
 * */
export interface ResponseInterface<T, U = void> {
  code: string;
  message: string;
  payload: T;
  [key: string]: U;
}

export interface PriceChangesResponseInterface
  extends ResponseInterface<PriceDataInterface[]> {
  sortedPricePairData: SortedPricePairInterface;
}

export interface CategoryListInterface {
  name: string;
  iconName: AntDesignIconNameType;
}
