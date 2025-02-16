import { Elysia } from 'elysia';
import { auth } from '~/http/auth';

const signOut = new Elysia().use(auth).post('/sign-out', async ({ signOut: internalSignOut }) => {
  internalSignOut();
});

export { signOut };
