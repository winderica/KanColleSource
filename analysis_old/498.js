/*
 * the function called by `476.js`
 * log
 */
const function498 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(499),
        o = function () {
            function t() {
            }

            Object.defineProperty(t.prototype, "list", {
                get: function () {
                    return this._list
                }, enumerable: !0, configurable: !0
            });
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