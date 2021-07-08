import { Context } from '@nuxt/types';

export default ({   }: Context) => {
  if (!process.env.DISABLED_MOCK) {
    const { worker } = require('../mocks/browser.ts');

    worker.start();
  }
};
