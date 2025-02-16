import axios from 'axios';
import { env } from '~/env';

export const api = axios.create({
  baseURL: env.PUBLIC_API_URL,
  withCredentials: true,
});

if (env.PUBLIC_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return config;
  });
}
