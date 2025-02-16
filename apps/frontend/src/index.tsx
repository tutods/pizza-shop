import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { ThemeProvider } from '~/components/theme/theme-provider';
import { queryClient } from '~/lib/react-query';
import { router } from '~/routes';

import '~/index.css';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <title>pizza.shop</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />

        <Toaster richColors closeButton />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
