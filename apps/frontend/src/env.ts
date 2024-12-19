import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().min(1),
});

const env = envSchema.parse(import.meta.env);

export { env };
