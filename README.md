[![lnf](http://i.imgur.com/tUWANmF.png)](#)

# lnf [![Support this project][donate-now]][paypal-donations]

Creates or overrides symlinks.

## Installation

```sh
$ npm i lnf
```

## Example

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

## Documentation

### `lnf(target, dstpath, type, callback)`
Creates or overrides a symlink.

#### Params
- **String** `target`: The target file. The path is relative to the `dstpath`.
- **String** `dstpath`: The path where the symlinks will be created or overriden.
- **String** `type`: The symlink type.
- **Function** `callback`: The callback function

#### Return
- ****

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md