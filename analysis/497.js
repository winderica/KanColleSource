/*
 * called by `482.js`
 * movable furniture
 */
const function497 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(498), o = function () {
        function t() {
        }

        // set furniture data
        t.prototype.setData = function (t) {
            if (this._dic = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], o = new n.FurnitureGraphModel(i), r = o.mstID;
                if (r > 0) {
                    var s = r.toString();
                    this._dic[s] = o
                }
            }
        };
        // is movable furniture
        t.prototype.isActive = function (t) {
            return 1 == this._dic.hasOwnProperty(t.toString())
        };
        // get furniture data
        t.prototype.get = function (t) {
            return 1 == this._dic.hasOwnProperty(t.toString()) ? this._dic[t.toString()] : null
        };
        return t
    }();
    e.FurnitureGraphModelHolder = o
}