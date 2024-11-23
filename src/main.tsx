import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.getElementById('root') as HTMLElement;

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
