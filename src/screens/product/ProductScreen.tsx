import { useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TopBackNavigation from '../../components/TopBackNavigation/TopBackNavigation';
import { colors, STORAGE_KEYS } from '../../constants';
import { RouteInterface } from '../../types';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export interface Params {
  symbol: string;
}

function ProductScreen() {
  const route: RouteInterface<Params> = useRoute();

  const symbol: string = route?.params?.symbol;

  const [watchlistItem, setWatchlistItem] = useState(false);

  const handleWatchlistItem = async () => {
    try {
      const newSymbol = [symbol]

      const existingWatchlistItemsString = await AsyncStorage.getItem(STORAGE_KEYS.WATCHLIST_ITEMS)

      // Add Item from Watchlist
      if (!watchlistItem) {
        // There's existing data
        if (!!existingWatchlistItemsString) {
          const existingWatchlistItemsArray: string[] = JSON.parse(existingWatchlistItemsString)

          const newWatchlistItems = existingWatchlistItemsArray.concat(newSymbol)

          await AsyncStorage.setItem(STORAGE_KEYS.WATCHLIST_ITEMS, JSON.stringify(newWatchlistItems))

          // No existing data
        } else {
          await AsyncStorage.setItem(STORAGE_KEYS.WATCHLIST_ITEMS, JSON.stringify(newSymbol))
        }
      }

      // Remove Item to watchlist
      if (watchlistItem && !!existingWatchlistItemsString) {
        const existingWatchlistItemsArray: string[] = JSON.parse(existingWatchlistItemsString)

        const newWatchlistItems = existingWatchlistItemsArray.filter(item => item !== symbol)

        await AsyncStorage.setItem(STORAGE_KEYS.WATCHLIST_ITEMS, JSON.stringify(newWatchlistItems))
      }

      setWatchlistItem(!watchlistItem)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getWatchlist = async () => {

      try {
        const watchlistItemsString = await AsyncStorage.getItem(STORAGE_KEYS.WATCHLIST_ITEMS)

        if (!!watchlistItemsString) {
          const watchlistItemsArray: string[] = JSON.parse(watchlistItemsString)

          const hasWatchlisted = watchlistItemsArray.some(watchlistItem => watchlistItem === symbol)

          setWatchlistItem(hasWatchlisted)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getWatchlist()

  }, [])


  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        {/* Back */}
        <TopBackNavigation />

        {/* Crypto name */}
        <View>
          <Text>
            {symbol}
          </Text>
        </View>

        {/* Star watchlist icon */}
        <View style={{ marginRight: 8 }}>
          <TouchableOpacity onPress={handleWatchlistItem}>
            <AntDesign name={watchlistItem ? 'star' : 'staro'} size={28} style={{ color: watchlistItem ? '#FFA500' : '#00000' }} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{symbol?.toUpperCase()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.bg.primary,
  },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});

export default ProductScreen;
