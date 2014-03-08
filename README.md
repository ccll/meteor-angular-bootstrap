meteor-angular-bootstrap
========================

Meteor package for angular-bootstrap. (http://angular-ui.github.io/bootstrap/)

## Install
`mrt add angular-bootstrap`

## v0.1.0 breaking change

* Add support for [angularite](https://github.com/ccll/meteor-angularite), a lightweight meteor-angular bridge.
* Dependency on ngMeteor changed to a 'weak' one. Which means if you like to stick with ngMeteor, you need to add ngMeteor explicitly in __your__ app's smart.json.


## Use with angularite
```
var app = Angularite.module('myApp', ['ui.bootstrap']);
```
