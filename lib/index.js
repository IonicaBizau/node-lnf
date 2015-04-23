// Dependencies
var Fs = require("fs");

/*!
 * handler
 * Generates a `lnf` function.
 *
 * @name handler
 * @function
 * @param {Boolean} isSync A flag to indicate if the function should be sync or async.
 * @return {Function} The generated function.
 */
function handler(isSync) {
    /**
     * lnf
     * Creates or overrides a symlink.
     *
     * @name lnf
     * @function
     * @param {String} target The target file. The path is relative to the `dstpath`.
     * @param {String} dstpath The path where the symlinks will be created or overriden.
     * @param {String} type The symlink type.
     * @param {Function} callback The callback function
     * @return {undefined}
     */
    var lnf = function (target, dstpath, type, callback) {

        if (typeof type === "function") {
            callback = type;
            type = undefined;
        }

        callback = callback || function (err) {
            if (err) { throw err; }
        };

        function res(err) {

            if (err && err.code === "EEXIST") {
                if (isSync) {
                    Fs.unlinkSync(dstpath);
                    lnf(target, dstpath, type, callback);
                } else {
                    Fs.unlink(dstpath, function (err) {
                        if (err) { return callback(err); }
                        lnf(target, dstpath, type, callback);
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
    return lnf;
}

// Create and export the functions
var Lnf = module.exports = handler(false);
Lnf.sync = handler(true);
