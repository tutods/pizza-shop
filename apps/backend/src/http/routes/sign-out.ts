import { Elysia } from 'elysia';
import { auth } from '~/http/auth.ts';

const signOut = new Elysia().use(auth).post('/sign-out', async ({ signOut: internalSignOut }) => {
  internalSignOut();
});

export { signOut };
