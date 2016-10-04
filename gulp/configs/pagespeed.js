'use strict';

import packageJson from '../../package.json';

export let pagespeed = {
  key: packageJson.config.googleapis.keys.server
};

export default pagespeed;
