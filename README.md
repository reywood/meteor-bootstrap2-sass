meteor-bootstrap2-sass
======================

Meteor package for bootstrap with Sass support. The boostrap Sass implementation used herein is the work of [Thomas McDonald](https://github.com/thomas-mcdonald).

To install
----------

```sh
$ mrt add bootstrap2-sass
```

To use
------

To activate bootstrap styles on your site, add the following lines to the top of your main scss file:

```scss
@import 'packages/bootstrap2-sass/bootstrap';
@import 'packages/bootstrap2-sass/bootstrap-responsive';
```