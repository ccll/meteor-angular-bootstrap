Package.describe({
    summary: "Bootstrap components written in pure AngularJS. (http://angular-ui.github.io/bootstrap/)"
});

Package.on_use(function (api, where) {
    api.use('ngMeteor', 'client');

    // angular-bootstrap files.
    api.add_files('lib/ui-bootstrap-tpls-0.10.0.js', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});

