import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => {
  return 'Hello world';
});

app.listen(3333, () => {
  console.info('🚀 HTTP server running on port 3333!');
});
