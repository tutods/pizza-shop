import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '@/routes';
import '@/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const element = document.getElementById('root') as HTMLElement;

createRoot(element).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
