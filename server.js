var
  express = require('express'),
  app = express(),
  server = require('http').Server(app);

module.exports = {
  http: server,
  app
};

// serve static files
app.use(express.static('dist/'));
