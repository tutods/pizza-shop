import type { Config } from 'drizzle-kit';

// biome-ignore lint/style/noDefaultExport: configs. needs to be a default export
export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
} satisfies Config;
