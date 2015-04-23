// Dependencies
var Lnf = require("../lib");

// Create the symlink
Lnf.sync("foo", __dirname + "/baz");

// Override it
Lnf("bar", __dirname + "/baz", function (err) {
    console.log(err || "Overriden the baz symlink.");
});

