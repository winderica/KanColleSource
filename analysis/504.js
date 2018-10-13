/*
 * called by `482.js`
 * log
 */
const function504 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(505), o = function () {
        function t() {
        }

        // log message list
        Object.defineProperty(t.prototype, "list", {
            get: function () {
                return this._list
            }, enumerable: !0, configurable: !0
        });
        // set log message
        t.prototype.setData = function (t) {
            if (this._list = [], null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e];
                null != i && this._list.push(new n.LogModel(i))
            }
        };
        return t
    }();
    e.LogModelHolder = o
}