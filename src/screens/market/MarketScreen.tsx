import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CurrencyItem from './components/CurrencyItem/CurrencyItem';
import { useCurrencyList } from '../../hooks/useCurrencyList';
import AntDesign from '@expo/vector-icons/AntDesign';
import { categoryList, SCREENS } from '../../constants';
import CategoryItem from './components/CategoryItem/CategoryItem';
import createStyles from './MarketScreen.style';
import { useNavigation } from '@react-navigation/native';

const MainContainer = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const { data, refetch } = useCurrencyList();

  const styles = useMemo(() => createStyles(), []);

  const barStyle = useMemo(
    () => (Platform.OS === 'ios' ? 'dark-content' : 'default'),
    [Platform.OS]
  );

  const handleRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };
  
  const handleGoToWatchlistPage = () => {
    navigation.navigate(SCREENS.WATCHLIST)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle} />
      {/* Navbar */}
      <View style={styles.navigation}>
        <View>
          <Text style={styles.headingText}>Market</Text>
        </View>
        <TouchableOpacity style={styles.iconsContainer} onPress={handleGoToWatchlistPage}>
          <AntDesign name='staro' size={28} style={styles.staro} />
          <AntDesign name='search1' size={28} />
        </TouchableOpacity>
      </View>

      {/* Category */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryList}
          horizontal
          renderItem={(item) => <CategoryItem item={item.item} />}
        />
      </View>

      {/* List */}
      <View style={styles.list}>
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          initialNumToRender={10}
          data={data?.payload}
          renderItem={(currency) => <CurrencyItem currency={currency.item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MainContainer;
