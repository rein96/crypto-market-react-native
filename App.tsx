import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainApp from './src/MainApp';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
}
