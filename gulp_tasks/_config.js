'use strict';

var path = require('path');

var manifest = require(__dirname + '/../package.json');

var config = {};

config.browsersync = {};
config.files = {};
config.path = {};
config.port = {};

config.theme = 'wordpress-starter-kit';

// Ports
config.port.http = process.env.PORT ? process.env.PORT : manifest.config.server.http.port;
config.port.browsersync = manifest.config.server.browsersync.port;

// Paths
config.path.root = path.normalize(__dirname + '/../www');
config.path.nodeModules = path.normalize(__dirname + '/../node_modules');

config.path.bowerComponents = config.path.root + '/bower_components';
config.path.base = config.path.root + '/wp-content/themes/' + config.theme;

config.path.markup = config.path.base;
config.path.scripts = config.path.base + '/js';
config.path.styles = config.path.base + '/sass';
config.path.styleguide = config.path.base + '/styleguide';

// Files
config.files.markup = config.path.markup + '/**/*.html';
config.files.scripts = config.path.scripts + '/**/*.js';
config.files.styles = config.path.styles + '/**/*.scss';

// BrowserSync
config.browsersync.files = [
  config.path.base + '/**',
  '!' + config.path.base + '/**.map'
];

config.browsersync.browser = ['google chrome'];
config.browsersync.open = false
config.browsersync.port = config.port.browsersync;
config.browsersync.proxy = 'http://localhost:' + config.port.http;
// config.browsersync.tunnel = true;

module.exports = config;
