/*
 * called by `482.js`
 * file name of ship's graph and voice
 */
const function515 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(516), o = function () {
        function t() {
        }

        // set data
        t.prototype.setData = function (t) {
            if (this._dic = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], o = new n.ShipGraphModel(i), r = o.mstID;
                if (r > 0) {
                    var s = r.toString();
                    this._dic[s] = o
                }
            }
        };
        // get data
        t.prototype.get = function (t) {
            return 1 == this._dic.hasOwnProperty(t.toString()) ? this._dic[t.toString()] : null
        };
        return t
    }();
    e.ShipGraphModelHolder = o
}