Package.describe({
    summary: "Bootstrap components written in pure AngularJS. (http://angular-ui.github.io/bootstrap/)"
});

function packageExists(pkgname) {
    var fs = Npm.require('fs');
    var path = Npm.require('path');
    var pkgpath = path.join('packages', pkgname);
    return fs.existsSync(pkgpath);
}

Package.on_use(function (api, where) {
    api.use('bower', 'client');

    if (packageExists('angularite')) {
        api.use('angularite', 'client');
    } else if (packageExists('ngMeteor')) {
        api.use('ngMeteor', 'client');
    }

    // Install bower components.
    api.add_files('smart.json', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});

