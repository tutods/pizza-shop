import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';
import { router } from '~/routes';
import '~/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from '~/components/theme/theme-provider';
import { queryClient } from '~/lib/react-query.ts';

const element = document.getElementById('root') as HTMLElement;

createRoot(element).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors closeButton />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
