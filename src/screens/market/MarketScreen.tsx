import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import CurrencyItem from '../../components/CurrencyItem/CurrencyItem';
import { useCurrencyList } from '../../hooks/useCurrencyList';
import AntDesign from '@expo/vector-icons/AntDesign';
import { categoryList } from '../../constants';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import createStyles from './MarketScreen.style';

const MainContainer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, refetch } = useCurrencyList();

  const styles = useMemo(() => createStyles(), []);

  const handleRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navigation}>
        <View>
          <Text style={styles.headingText}>Market</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name='staro' size={28} style={styles.staro} />
          <AntDesign name='search1' size={28} />
        </View>
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
