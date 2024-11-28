import type { Config } from 'drizzle-kit';
import { env } from '~/env';

// biome-ignore lint/style/noDefaultExport: configs. needs to be a default export
export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
