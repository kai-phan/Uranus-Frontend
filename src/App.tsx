import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import routerConfig from 'src/router.config';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 10,
    },
    mutations: {
      onSuccess: () => {
        console.log('application mutation level');
      },
      onError(error) {
        console.log(error);
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={routerConfig}
        fallbackElement={<div>...LOADING SCRIPTS</div>}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
