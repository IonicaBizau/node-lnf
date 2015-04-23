var Fs = require("fs");

function handler(isSync) {
    var func = function (target, dstpath, type, callback) {

        callback = callback || function (err) {
            if (err) { throw err; }
        };

        function res(err) {

            if (err && err.code === "EEXIST") {
                if (isSync) {
                    Fs.unlinkSync(dstpath);
                    func(target, dstpath, type, callback);
                } else {
                    Fs.unlink(dstpath, function (err) {
                        if (err) { return callback(err); }
                        func(target, dstpath, type, callback);
                    });
                }
                return;
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
    };
    return func;
}


var Lnf = module.exports = handler(false);
Lnf.sync = handler(true);
