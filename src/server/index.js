import { createServer } from 'miragejs';

const dashboardData = require('./data/dashboard.json');

if (window.server) {
  // eslint-disable-next-line no-undef
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.timing = 5000;
    this.get('/api/tenpoeats/dev/v1/dashboard', () => {
      return dashboardData;
    });
  },
});
