import React, { useMemo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { colors, STACKS } from '../constants';
import {
  AccountStackNavigator,
  DiscoverStackNavigator,
  HomeStackNavigator,
  MarketStackNavigator,
  WalletStackNavigator,
} from './StackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const getTabTitle = (name: string) => {
    return name.split('_')[0];
  };

  const navigationOptions: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarActiveTintColor: colors.text.primary,
      tabBarStyle: {
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowOpacity: 0.7,
        shadowRadius: 16.0,
      },
      headerShown: false,
    }),
    []
  );

  return (
    <BottomTab.Navigator
      initialRouteName={STACKS.MARKET_STACK}
      screenOptions={navigationOptions}
    >
      <BottomTab.Screen
        name={STACKS.HOME_STACK}
        component={HomeStackNavigator}
        options={({ route }) => {
          return {
            title: getTabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size} />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.DISCOVER_STACK}
        component={DiscoverStackNavigator}
        options={({ route }) => {
          return {
            title: getTabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='script-text-outline'
                color={color}
                size={size}
              />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.MARKET_STACK}
        component={MarketStackNavigator}
        options={({ route }) => {
          return {
            title: getTabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='chart-bar'
                color={color}
                size={size}
              />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.WALLET_STACK}
        component={WalletStackNavigator}
        options={({ route }) => {
          return {
            title: getTabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='wallet-outline'
                color={color}
                size={size}
              />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.ACCOUNT_STACK}
        component={AccountStackNavigator}
        options={({ route }) => {
          return {
            title: getTabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='account-outline'
                color={color}
                size={size}
              />
            ),
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
