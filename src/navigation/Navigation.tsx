import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MarketScreen from '../screens/market/MarketScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, SCREENS } from '../constants';
import HomeScreen from '../screens/home/HomeScreen';
import DiscoverScreen from '../screens/discover/DiscoverScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import AccountScreen from '../screens/account/AccountScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.MARKET}
      screenOptions={{
        tabBarActiveTintColor: colors.text.primary,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 0.7,
          shadowRadius: 16.0,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.DISCOVER}
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='script-text-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MARKET}
        component={MarketScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='chart-bar'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.WALLET}
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='wallet-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.ACCOUNT}
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
