import chalk from 'chalk';
import { Elysia } from 'elysia';
import { registerRestaurant } from '~/http/routes/register-restaurant';
import { sendAuthLink } from '~/http/routes/send-auth-link';

const app = new Elysia().use(sendAuthLink).use(registerRestaurant);

app.listen(3333, () => {
  console.info(chalk.bgGreen('🚀 HTTP server running on port 3333!'));
});
