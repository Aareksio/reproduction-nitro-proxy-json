export default defineNitroConfig({
  routeRules: {
    '/api/json': { headers: { 'content-type': 'application/json' } },
    '/api/proxied': { proxy: { to: '/api/json' } },
  },
});
