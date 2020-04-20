const bs = require('browser-sync').create();
const transformMiddleware =
  require('express-transform-bare-module-specifiers').default;
const express = require('express');

const app = express();
const path = require('path');

app.use('*', transformMiddleware());

bs.init({
  server: {
    baseDir: './',
    index: 'index.html'
  },

  cors: true,

  middleware: [app],

  files: [
    'src/*.js',
    'css/*.css',
    '*.html',
  ],
  port: 5000,
  notify: false,
  ui: {
      "port": 5002,
  },
});
