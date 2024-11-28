import chalk from 'chalk';
import { Elysia, t } from 'elysia';
import { db } from '~/db/connection';
import { restaurants, users } from '~/db/schema';

const app = new Elysia().post(
  '/restaurants',
  async ({ body, set }) => {
    const { restaurantName, managerName, email, phone } = body;

    const [manager] = await db
      .insert(users)
      .values({
        name: managerName,
        email,
        phone,
        role: 'manager',
      })
      .returning({
        id: users.id,
      });
    await db.insert(restaurants).values({
      name: restaurantName,
      managerId: manager.id,
    });

    set.status = 204;
  },
  {
    body: t.Object({
      restaurantName: t.String(),
      managerName: t.String(),
      phone: t.String(),
      email: t.String({ format: 'email' }),
    }),
  },
);

app.listen(3333, () => {
  console.info(chalk.bgGreen('🚀 HTTP server running on port 3333!'));
});
