import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CurrencyItem from './components/CurrencyItem/CurrencyItem';
import { useCurrencyList } from './hooks/useCurrencyList';
import AntDesign from '@expo/vector-icons/AntDesign';
import { categoryList } from './constants';
import CategoryItem from './components/CategoryItem/CategoryItem';

const MainContainer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, refetch } = useCurrencyList();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  headingText: {
    fontWeight: '700',
    fontSize: 28,
  },
  navigation: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    marginLeft: 16,
    marginBottom: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  staro: {
    marginRight: 12,
  },
  list: {
    flex: 1,
  },
});

export default MainContainer;
