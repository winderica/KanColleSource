/*
 * the function called by `476.js`
 * file name of ship's graph and voice
 */
const function509 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(510),
        o = function () {
            function t() {
            }

            t.prototype.setData = function (t) {
                if (this._dic = {}, null != t) for (var e = 0; e < t.length; e++) {
                    var i = t[e], o = new n.ShipGraphModel(i), r = o.mstID;
                    if (r > 0) {
                        var s = r.toString();
                        this._dic[s] = o
                    }
                }
            };
            t.prototype.get = function (t) {
                return 1 == this._dic.hasOwnProperty(t.toString()) ? this._dic[t.toString()] : null
            };
            return t
        }();
    e.ShipGraphModelHolder = o
}