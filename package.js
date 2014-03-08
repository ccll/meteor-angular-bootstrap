Package.describe({
    summary: "Bootstrap components written in pure AngularJS. (http://angular-ui.github.io/bootstrap/)"
});

Package.on_use(function (api, where) {
    api.use('bower', 'client');

    api.use('angularite', 'client', {weak: true});
    api.use('ngMeteor', 'client', {weak: true});

    // Install bower components.
    api.add_files('smart.json', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});

