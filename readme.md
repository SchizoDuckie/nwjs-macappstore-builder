![Version](https://img.shields.io/npm/v/nwjs-osx-on-linux-builder.svg)
![Downloads](https://img.shields.io/npm/dm/nwjs-osx-on-linux-builder.svg)
![Dependencies](https://img.shields.io/david/johansatge/nwjs-osx-on-linux-builder.svg)
![devDependencies](https://img.shields.io/david/dev/johansatge/nwjs-osx-on-linux-builder.svg)

# NW.js Linux Builder

![Icon](icon.jpg)

This node module is a slightly modified version of Johan Satgé nwjs-osx-on-linux-builder that has been modified to build and package [NW.js](http://nwjs.io) apps on (ubuntu) linux

It automates all the steps described in [Publishing NW.js apps on the Mac App Store: a detailed guide](https://github.com/johansatge/nwjs-macappstore).

---

* [Installation](#installation)
* [Configuration](#configuration)
* [Programmatic usage](#programmatic-usage)
* [CLI usage](#cli-usage)
* [Changelog](#changelog)
* [License](#license)
* [Credits](#credits)

## Installation

Install with [npm](https://www.npmjs.com/):

```bash
npm install -g nwjs-osx-on-linux-builder
```

## Configuration

The configuration of the tool uses a standard JS object:

```javascript
var config = {

    // Build paths
    nwjs_path: '/Applications/nwjs.app', // Last build tested with NW.js 0.12.2
    source_path: '/Users/johan/Github/my-nwjs-project/app', // App root (the dir with the package.json file)
    build_path: '/Users/johan/Desktop', // Destination dir of the .app build
    
    // App informations
    name: 'Your App',
    bundle_id: 'com.yourcompanyname.yourapp',
    version: '1.4.8',
    bundle_version: '148',
    copyright: '© Sample copyright',
    icon_path: '/Users/johan/Github/my-nwjs-project/icon.icns',
}
```

## Programmatic usage

Just require the module and fire the `build` function.

```javascript
var Builder = require('nwjs-osx-on-linux-builder');
var show_output = true;

var builder = new Builder();
builder.build(config, function(error, app_path)
{
    console.log(error ? error.message : 'Build done: ' + app_path);
}, show_output);
```

## CLI usage

Each parameter of the config can be passed as a parameter:

```bash
nwjs-osx-on-linux-builder --name=YourApp --bundle_id=com.yourcompanyname.yourapp [...]
```

As there are a lot of parameters, you may prefer this more readable alternative:

```bash
nwjs-osx-on-linux-builder --config=/Users/johan/Desktop/build-config.json
```

The `build-config.json` file being a JSON object containing all the parameters described above.

## Changelog

| Version | Date | Notes |
| --- | --- | --- |
| `1.0.0` | 2017-01-20 | Forked by SchizoDuckie, modified to work on linux. (removed signing and uglifyjs)
| `3.1.6` | 2016-05-09 | Displays a warning on minification error & updates dependencies |
| `3.1.5` | 2016-02-10 | Fixes validation issue when using uppercase letters in `bundle_id` |
| `3.1.4` | 2015-09-12 | Updates dependencies |
| `3.1.3` | 2015-08-15 | Adds quotes around code-signing identity |
| `3.1.2` | 2015-07-21 | Fixes minify path |
| `3.1.1` | 2015-07-21 | Fixes relative config path |
| `3.1.0` | 2015-07-20 | Adds `uglify_js` option (will uglify all JS found in the app) |
| `3.0.2` | 2015-07-09 | Do not `--force` signing as it makes the app crash on some cases |
| `3.0.1` | 2015-07-09 | Adds the `Fixing permissions` step |
| `3.0.0` | 2015-07-09 | Adds the `identity_installer` option<br>Adds `--force` when signing<br>Do not force bundle IDs when signing |
| `2.1.2` | 2015-07-08 | Updates repository URL |
| `2.1.1` | 2015-07-08 | NPM fix |
| `2.1.0` | 2015-07-08 | Adds packaging step |
| `2.0.0` | 2015-07-08 | Initial version |

## License

This project is released under the [MIT License](LICENSE).

## Credits

* [johansatge's nwjs-macappstore-builder](johansatge/nwjs-macappstore-builder)
* [async](https://github.com/caolan/async)
* [colors](https://github.com/Marak/colors.js)
* [plist](https://github.com/TooTallNate/plist.js)
* [validator.js](validatorjs.org)
* [yargs](https://github.com/bcoe/yargs)
* [glob](https://github.com/isaacs/node-glob)
