// Add module 'ui.bootstrap' as dependency.
Meteor.startup(function() {
    if (typeof(ngMeteor) !== 'undefined') {
        ngMeteor.requires.push('ui.bootstrap');
    }
});

