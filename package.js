Package.describe({
    summary: "Bootstrap with Sass support"
});

Package.on_use(function (api) {
    api.add_files([
        "assets/images/glyphicons-halflings-white.png",
        "assets/images/glyphicons-halflings.png",

        "assets/javascripts/bootstrap-affix.js",
        "assets/javascripts/bootstrap-alert.js",
        "assets/javascripts/bootstrap-button.js",
        "assets/javascripts/bootstrap-carousel.js",
        "assets/javascripts/bootstrap-collapse.js",
        "assets/javascripts/bootstrap-dropdown.js",
        "assets/javascripts/bootstrap-modal.js",
        "assets/javascripts/bootstrap-scrollspy.js",
        "assets/javascripts/bootstrap-tab.js",
        "assets/javascripts/bootstrap-tooltip.js",
        "assets/javascripts/bootstrap-popover.js",
        "assets/javascripts/bootstrap-transition.js",
        "assets/javascripts/bootstrap-typeahead.js"
    ], "client");
});