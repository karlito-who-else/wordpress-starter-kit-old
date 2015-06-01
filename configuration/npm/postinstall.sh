#!/bin/sh

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

cd $dir/../..

mkdir -p www/wp-content/themes/wordpress-starter-kit/styleguide/templates && cp -r node_modules/gulp-dss/templates www/wp-content/themes/wordpress-starter-kit/styleguide
