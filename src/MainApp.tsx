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

const MainContainer = () => {
  const { data } = useCurrencyList();
  return (
    <SafeAreaView style={styles.container}>
      {/* Navbar */}
      <View style={styles.search}>
        <Text style={styles.headingText}>Market</Text>
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
  },
  list: {
    flex: 1,
  },
});

export default MainContainer;
