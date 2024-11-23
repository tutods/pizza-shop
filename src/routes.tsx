import { Dashboard } from '@/pages/app/dashboard';
import { SignIn } from '@/pages/auth/sign-in';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);

export { router };
