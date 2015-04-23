// Dependencies
var Lnf = require("../lib")
  , Assert = require("assert")
  , Fs = require("fs")
  , IsThere = require("is-there")
  ;

// Constants
const PATHS = {
      foo: __dirname + "/foo"
    , bar: __dirname + "/bar"
    }
  , SYM_PATH = __dirname + "/baz"
  , CONTENT = {
      foo: Fs.readFileSync(__dirname + "/foo", "utf-8")
    , bar: Fs.readFileSync(__dirname + "/bar", "utf-8")
    }
  ;

// Prepare the environment
if (IsThere.sync(SYM_PATH)) {
    Fs.unlinkSync(SYM_PATH);
}

// Async
it("should create the symlinks asynchronously", function (cb) {
    Lnf("foo", SYM_PATH, cb);
});

// Check content
it("should contain \"" + CONTENT.foo + "\" content", function (cb) {
    Assert.strictEqual(Fs.readFileSync(SYM_PATH, "utf-8"), CONTENT.foo);
    cb();
});

// Sync
it("should create the symlinks synchronously", function (cb) {
    Lnf.sync("bar", SYM_PATH);
    cb();
});

// Check content
it("should contain \"" + CONTENT.foo + "\" content", function (cb) {
    Assert.strictEqual(Fs.readFileSync(SYM_PATH, "utf-8"), CONTENT.bar);
    cb();
});
