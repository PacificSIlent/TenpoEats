import { createServer } from 'miragejs';

const dashboardData = require('./data/dashboard.json');

if (window.server) {
  // eslint-disable-next-line no-undef
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.namespace = '/api/tenpoeats';
    this.passthrough('https://maps.googleapis.com/maps/**');
    this.timing = 5000;
    this.get('/dev/v1/dashboard', () => {
      return dashboardData;
    });
  },
});
