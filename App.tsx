import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './src/navigation';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
