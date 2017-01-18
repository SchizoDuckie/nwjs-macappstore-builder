'use strict';

var path = require('path');
var exec = require('child_process').exec;
var handlebars = require('handlebars');
require('shelljs/global');

var m = {};

m.buildPackage = function(app_path, identity, callback) {

    var config = {
        "NAME": "", // Application name (no spaces): 
        "VERSION": "", // Application version: " -i "1.0.0
        "DESCRIPTION": "", // Application description: " -i "${CONF_NAME} v${CONF_VERSION} Application
        "SRC": "", // Application src directory path: 
        "ICON_PNG": "", // PNG icon path: 
        "ICON_OSX": "", // OSX icon (.icns) path: 
        "osxBgPath": "", // OSX .pkg background file path
        "CFBundleIdentifier": "", // OSX CFBundleIdentifier: 
        "LICENSE": "" // License file path: 
    };

    var template = Handlebars.compile(source);

    var data = {
        "name": "Alan",
        "hometown": "Somewhere, TX",
        "kids": [{
            "name": "Jimmy",
            "age": "12"
        }, {
            "name": "Sally",
            "age": "4"
        }]
    };
    var result = template(data);

    var dir = path.dirname(app_path);
    var app = path.basename(app_path);
    var pkg = app.replace('.app', '.pkg');
    var command = 'cd "' + dir + '" && productbuild --component "' + app + '" /Applications --sign "' + identity + '" "' + pkg + '"';
    exec(command, callback);
};

module.exports = m;