Package.describe({
  summary: "Bootstrap components written in pure AngularJS. (http://angular-ui.github.io/bootstrap/)"
});

Package.on_use(function (api, where) {
  api.add_files('init.js', 'client');
});
