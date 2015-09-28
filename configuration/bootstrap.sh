#!/bin/sh

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

cd $dir/../..

# create config from sample, replacing salt example lines with a real salt from online generator
grep -A 1 -B 50 'since 2.6.0' www/wp-config-sample.php > app/wp-config.php
wget -O - https://api.wordpress.org/secret-key/1.1/salt/ >> app/wp-config.php
echo -e "" >> www/wp-config.php
grep -A 50 -B 3 'Table prefix' www/wp-config-sample.php >> app/wp-config.php

# put the appropriate db info in place of placeholders in our new config file
replace 'database_name_here' $3 -- app/wp-config.php
replace 'username_here' $4 -- app/wp-config.php
replace 'password_here' $5 -- app/wp-config.php

#awk '{print "prefix" "define"}' file

# change file ownership and permissions according to ideal at http://codex.wordpress.org/Hardening_WordPress#File_Permissions
touch www/.htaccess
#chown $1:httpd .htaccess
#chown -R $1:httpd *
find www -type d -exec chmod 755 {} \;
find www -type f -exec chmod 644 {} \;
chmod -R 770 wp-content
chmod -R g-w www/wp-admin www/wp-includes www/wp-content/plugins
chmod g+w www/.htaccess

cp -rp www/wp-content/themes/_s app/wp-content/themes/wordpress-starter-kit

mkdir -p app/wp-content/themes/wordpress-starter-kit/styleguide/templates && cp -r node_modules/gulp-dss/templates app/wp-content/themes/wordpress-starter-kit/styleguide
