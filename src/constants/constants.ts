import { CategoryListInterface } from '../types';

const UPDATE_PRICE_INTERVAL = 5000; // 5 second

const UPDATE_CURRENCY_INTERVAL = 20000; // 20 second

const categoryList: CategoryListInterface[] = [
  {
    name: 'New',
    iconName: 'tago',
  },
  {
    name: 'DeFi',
    iconName: 'database',
  },
  {
    name: 'NFT/Gaming',
    iconName: 'tablet1',
  },
  {
    name: 'CEX',
    iconName: 'linechart',
  },
  {
    name: 'DEX',
    iconName: 'arrowsalt',
  },
  {
    name: 'Layer-1',
    iconName: 'hdd',
  },
  {
    name: 'Infrastructure',
    iconName: 'database',
  },
  {
    name: 'Lending',
    iconName: 'calendar',
  },
  {
    name: 'Layer-2',
    iconName: 'hdd',
  },
  {
    name: 'Ekosistem Stablecoin',
    iconName: 'piechart',
  },
];

/**
 * Use const for auto-generated type
 * @see https://stackoverflow.com/questions/53662208/types-from-both-keys-and-values-of-object-in-typescript
 */
const SCREENS = {
  HOME: 'Home',
  DISCOVER: 'Discover',
  MARKET: 'Market',
  WALLET: 'Wallet',
  ACCOUNT: 'Account',
  PRODUCT: 'Product',
} as const;

const STACKS = {
  HOME_STACK: 'Home_STACK',
  DISCOVER_STACK: 'Discover_STACK',
  MARKET_STACK: 'Market_STACK',
  WALLET_STACK: 'Wallet_STACK',
  ACCOUNT_STACK: 'Account_STACK',
  PRODUCT_STACK: 'Product_STACK',
} as const;

export {
  UPDATE_CURRENCY_INTERVAL,
  UPDATE_PRICE_INTERVAL,
  categoryList,
  SCREENS,
  STACKS,
};
