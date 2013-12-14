Package.describe({
    summary: "Bootstrap with Sass support"
});

Package.on_use(function (api) {
    api.add_files([
        "modules/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
        "modules/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
        "modules/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
        "modules/bootstrap-sass/vendor/assets/fonts/bootstrap/glyphicons-halflings-regular.woff",

        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js",
        "modules/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js",
    ], "client");
});