#!/usr/bin/env sh

if [ -d assets ]; then
	rm -rf assets
fi

cp -R modules/bootstrap-sass/vendor/assets ./
patch -p0 < sprites.patch
patch -p0 < variables.patch
rm assets/stylesheets/bootstrap.scss
rm assets/stylesheets/bootstrap-responsive.scss
rm assets/stylesheets/bootstrap/bootstrap.scss
rm assets/stylesheets/bootstrap/responsive.scss
