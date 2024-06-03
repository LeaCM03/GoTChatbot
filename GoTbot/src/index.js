import { App } from '@botonic/react';
import { routes } from './routes';
import { locales } from './locales';

const app = new App({
  routes,
  locales,
});

export default app;
