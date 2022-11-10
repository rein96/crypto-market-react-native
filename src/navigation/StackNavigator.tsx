import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants';
import {
  AccountScreen,
  DiscoverScreen,
  HomeScreen,
  MarketScreen,
  ProductScreen,
  WalletScreen,
} from '../screens';
import WatchlistScreen from '../screens/watchlist/Watchlist.screen';

const MarketStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const WalletStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

export const MarketStackNavigator = () => {
  return (
    <MarketStack.Navigator screenOptions={{ headerShown: false }}>
      <MarketStack.Screen name={SCREENS.MARKET} component={MarketScreen} />
      <MarketStack.Screen name={SCREENS.PRODUCT} component={ProductScreen} />
      <MarketStack.Screen name={SCREENS.WATCHLIST} component={WatchlistScreen} options={{headerShown: true}} />
    </MarketStack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const DiscoverStackNavigator = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name={SCREENS.DISCOVER}
        component={DiscoverScreen}
      />
    </DiscoverStack.Navigator>
  );
};

export const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name={SCREENS.WALLET} component={WalletScreen} />
    </WalletStack.Navigator>
  );
};

export const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name={SCREENS.ACCOUNT} component={AccountScreen} />
    </AccountStack.Navigator>
  );
};
