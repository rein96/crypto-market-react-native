import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MarketScreen from './src/screens/market/MarketScreen';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketScreen />
    </QueryClientProvider>
  );
}
