import dayjs from 'dayjs';
import { eq } from 'drizzle-orm';
import { Elysia, t } from 'elysia';
import { db } from '~/db/connection.ts';
import { authLinks } from '~/db/schema';
import { auth } from '~/http/auth.ts';

const authenticateFromLink = new Elysia().use(auth).get(
  '/auth-links/authenticate',
  async ({ query, set, signUser }) => {
    const { code, redirect } = query;

    const authLinkFromCode = await db.query.authLinks.findFirst({
      where(fields, { eq }) {
        return eq(fields.code, code);
      },
    });

    if (!authLinkFromCode) {
      throw new Error('Auth link not found!');
    }

    const daysSinceAuthLinkWasCreated = dayjs().diff(authLinkFromCode.createdAt, 'days');
    if (daysSinceAuthLinkWasCreated > 7) {
      throw new Error('Auth link expired, please generate a new one!');
    }

    const managedRestaurant = await db.query.restaurants.findFirst({
      where(fields, { eq }) {
        return eq(fields.managerId, authLinkFromCode.userId);
      },
    });

    await signUser({
      sub: authLinkFromCode.userId,
      restaurantId: managedRestaurant?.id,
    });

    /**
     * Delete the link from the database to prevent
     * to be used again.
     */
    await db.delete(authLinks).where(eq(authLinks.code, code));

    set.redirect = redirect;
  },
  {
    query: t.Object({
      code: t.String(),
      redirect: t.String(),
    }),
  },
);

export { authenticateFromLink };
