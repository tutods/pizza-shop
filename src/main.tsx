import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';
import { router } from '~/routes';
import '~/index.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from '~/components/theme/theme-provider';

const element = document.getElementById('root') as HTMLElement;

createRoot(element).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
