# lnf
Creates or overrides symlinks.

## Installation
```sh
$ npm install lnf
```

## Example

```js
// Dependencies
var Lnf = require("lnf");

// Create the symlink
Lnf.sync("foo", __dirname + "/baz", function () {

});

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

### `Lnf(target, dstpath, type)`
Synchronous `lnf`.


## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
