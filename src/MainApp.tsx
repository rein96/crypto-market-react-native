import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CurrencyItem from './components/CurrencyItem';
import { useCurrencyList } from './hooks/useCurrencyList';
import AntDesign from '@expo/vector-icons/AntDesign';

const MainContainer = () => {
  const { data } = useCurrencyList();
  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.search}>
        <View>
          <Text style={styles.headingText}>Market</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name='staro' size={28} style={styles.staro} />
          <AntDesign name='search1' size={28} />
        </View>
      </View>
      {/* List */}
      <View style={styles.list}>
        <FlatList
          data={data?.payload}
          renderItem={(currency) => <CurrencyItem currency={currency.item} />}
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
  search: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
