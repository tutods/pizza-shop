import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '@/routes';
import '@/index.css';

const element = document.getElementById('root') as HTMLElement;

createRoot(element).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
