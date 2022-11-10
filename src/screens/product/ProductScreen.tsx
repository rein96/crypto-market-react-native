import { useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopBackNavigation from '../../components/TopBackNavigation/TopBackNavigation';
import { colors } from '../../constants';
import { RouteInterface } from '../../types';

export interface Params {
  symbol: string;
}

function ProductScreen() {
  const route: RouteInterface<Params> = useRoute();

  const symbol: string = route?.params?.symbol;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TopBackNavigation />
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
