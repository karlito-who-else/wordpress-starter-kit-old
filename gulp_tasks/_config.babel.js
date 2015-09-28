import {
  create as browserSyncCreate
} from 'browser-sync';

import fs from 'fs';

import manifest from '../package.json';

const bowerrc = JSON.parse(fs.readFileSync('.bowerrc'));

export const browserSync = browserSyncCreate();

export let config = {};

config.domain = manifest.domain;

config.connection = {
  staging: {
    base: '/var/www/html/tdm/site',
    host: 'staging-01',
    user: 'wednesday-admin',
    privateKey: '/Users/karl/.ssh/wednesday-admin',
    port: 22
  }
};

config.port = {
  http: process.env.PORT ? process.env.PORT : manifest.config.server.http.port
};

config.instance = {
  pagespeed: {
    key: ''
  }
};

config.path = {
  deploy: './deploy-test',
  root: './',
  source: {
    base: 'app/',
    bowerComponents: bowerrc.directory + '/',
    nodeModules: 'node_modules/'
  },
  destination: {
    base: 'www/',
    bowerComponents: 'www/' + bowerrc.directory + '/'
  }
};

config.path.source.customStyles = config.path.source.base + '/styles/';
config.path.source.documentation = config.path.source.base + '/documentation/';
config.path.source.elements = config.path.source.base + '/elements/';
config.path.source.fonts = config.path.source.base + '/fonts/';
config.path.source.markup = config.path.source.base + '/';
config.path.source.icons = config.path.source.base + '/icons/';
config.path.source.images = config.path.source.base + '/images/';
config.path.source.locales = config.path.source.base + '/locales/';
config.path.source.scripts = config.path.source.base + '/scripts/';
config.path.source.screenshots = config.path.source.base + '/screenshots/';
config.path.source.sounds = config.path.source.base + '/sounds/';
config.path.source.styles = config.path.source.base + '/styles/';
config.path.source.styleguide = config.path.source.base + '/styleguide/';
config.path.source.videos = config.path.source.base + '/videos/';

config.path.destination.customStyles = config.path.destination.base + '/styles/';
config.path.destination.documentation = config.path.destination.base + '/documentation/';
config.path.destination.elements = config.path.destination.base + '/elements/';
config.path.destination.fonts = config.path.destination.base + '/fonts/';
config.path.destination.icons = config.path.destination.base + '/icons/';
config.path.destination.images = config.path.destination.base + '/images/';
config.path.destination.locales = config.path.destination.base + '/locales/';
config.path.destination.markup = config.path.destination.base + '/';
config.path.destination.scripts = config.path.destination.base + '/scripts/';
config.path.destination.screenshots = config.path.destination.base + '/screenshots/';
config.path.destination.sounds = config.path.destination.base + '/sounds/';
config.path.destination.styles = config.path.destination.base + '/styles/';
config.path.destination.styleguide = config.path.destination.base + '/styleguide/';
config.path.destination.videos = config.path.destination.base + '/videos/';

config.files = {};

config.files.all = [
  config.path.source.base + '**'
];
config.files.configuration = {
  json: config.path.root + '{*.json,.*rc}',
  yaml: config.path.root + '{*.yml,.*.yml}'
};
config.files.customStyles = [
  config.path.source.customStyles + '*.html'
]
config.files.documentation = [
  config.path.source.base + 'README.md'
];
config.files.icons = [
  config.path.source.base + '**/*.svg'
];
config.files.images = [
  config.path.source.base + '**/*.{gif,jpg,jpeg,png,svg}'
];
config.files.json = [
  config.path.source.base + '**/*.json'
];
config.files.locales = [
  config.path.source.locales + '**/*.json'
];
config.files.maps = [
  config.path.source.base + '**/*.map'
];
config.files.markup = [
  config.path.source.base + '**/*.html'
];
config.files.miscellaneous = [
  config.path.source.base + '*.{css,ico,txt}'
];
config.files.packages = [
  config.path.nodeModules + 'apache-server-configs/dist/.htaccess'
];
config.files.scripts = [
  // config.path.source.base + '**/!(*-min).js'
  config.path.source.base + '**/*.js'
];
config.files.sounds = [
  config.path.source.base + '**/*.{ogg,pcm,mp3,wav}'
];
config.files.styles = [
  config.path.source.base + '**/*.scss'
];
config.files.tasks = [
  config.path.root + 'gulpfile.js',
  config.path.root + 'gulpfile.babel.js',
  config.path.root + 'gulp_tasks/**/*.js'
];
config.files.videos = [
  config.path.source.base + '**/*.{avi,ogg,mov,mp4,mpg,mpeg}'
];

config.instance.browsersync = {
  browser: [
    'google chrome'
  ],
  files: [
    config.path.destination.base + '/**',
    '!' + config.path.destination.base + '**/*.scss',
    '!' + config.path.destination.base + '**/*.map'
  ],
  // Run as an https by uncommenting 'https: true'
  // Note: this uses an unsigned certificate which on first access will present a certificate warning in the browser.
  // https: true,
  logPrefix: manifest.name,
  notify: false,
  open: false,
  port: manifest.config.server.browsersync.socket.port,
  // proxy: 'http://localhost:' + config.port.http,
  server: {
    baseDir: [
      '.tmp',
      'www'
    ],
    routes: {
      '/bower_components': 'bower_components',
      '/node_modules': 'node_modules'
    }
  },
  snippetOptions: {
    rule: {
      match: '<span id="browser-sync-binding"></span>',
      fn: function (snippet) {
        return snippet;
      }
    }
  },
  ui: {
    port: manifest.config.server.browsersync.ui.port
  }
};

config.instance.vorlon = {
  port: manifest.config.server.vorlon.ui.port
};
export default config;
