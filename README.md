
[![lnf](http://i.imgur.com/tUWANmF.png)](#)

# lnf

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-lnf.svg)](https://travis-ci.org/IonicaBizau/node-lnf/) [![Version](https://img.shields.io/npm/v/lnf.svg)](https://www.npmjs.com/package/lnf) [![Downloads](https://img.shields.io/npm/dt/lnf.svg)](https://www.npmjs.com/package/lnf) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Creates or overrides symlinks.

## :cloud: Installation

```sh
$ npm i --save lnf
```


## :clipboard: Example



```js
// Dependencies
var Lnf = require("lnf");

// Create the symlink
Lnf.sync("foo", __dirname + "/baz");

// Override it
Lnf("bar", __dirname + "/baz", function (err) {
    console.log(err || "Overriden the baz symlink.");
});
```

## :memo: Documentation


### `lnf(target, dstpath, type, callback)`
Creates or overrides a symlink.

#### Params
- **String** `target`: The target file. The path is relative to the `dstpath`.
- **String** `dstpath`: The path where the symlinks will be created or overriden.
- **String** `type`: The symlink type.
- **Function** `callback`: The callback function

#### Return
- ****



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
