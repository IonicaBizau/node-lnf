var Fs = require("fs");

function handler(isSync) {
    return function (target, dstpath, type, callback) {

        callback = callback || function (err) {
            if (err) { throw err; }
        };

        function res(err) {
            if (err && err.code === "EEXIST") {
                return console.log("now");
            }
            callback(err);
        }

        if (isSync) {
            try {
                Fs.symlinkSync(target, dstpath, type);
            } catch (err) {
                return res(err);
            }
        } else {
            Fs.symlink(target, dstpath, type, res);
        }
    }
}


var Lnf = module.exports = handler(false);
Lnf.sync = handler(true);
