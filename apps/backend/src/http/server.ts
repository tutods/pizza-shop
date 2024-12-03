import cookie from '@elysiajs/cookie';
import jwt from '@elysiajs/jwt';
import chalk from 'chalk';
import { Elysia, t } from 'elysia';
import { env } from '~/env';
import { registerRestaurant } from '~/http/routes/register-restaurant';
import { sendAuthLink } from '~/http/routes/send-auth-link';

const app = new Elysia()
  .use(
    jwt({
      secret: env.JWT_SECRET_KEY,
      schema: t.Object({
        sub: t.String(),
        restaurantId: t.Optional(t.String()),
      }),
    }),
  )
  .use(cookie())
  .use(sendAuthLink)
  .use(registerRestaurant);

app.listen(3333, () => {
  console.info(chalk.bgGreen('🚀 HTTP server running on port 3333!'));
});
