if (!process.env.DISABLED_MOCK) {
  const { server } = require('../mocks/server.ts');

  server.listen();
}
