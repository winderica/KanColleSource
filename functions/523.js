const function523 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(524),
        o = function () {
            function t() {}
            return t.prototype.setData = function (t) {
                if (this._map = {}, null != t)
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e],
                            o = new n.NDockModelEdit(i),
                            r = o.mstID;
                        if (r > 0) {
                            var s = r.toString();
                            this._map[s] = o
                        }
                    }
            }, t.prototype.get = function (t) {
                var e = t.toString();
                return 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
            }, t.prototype.getAll = function () {
                var t = new Array;
                for (var e in this._map) {
                    var i = this._map[e];
                    t.push(i)
                }
                return t
            }, t.prototype.getShipMemIDs = function () {
                for (var t = [], e = this.getAll(), i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    o.shipMemID > 0 && t.push(o.shipMemID)
                }
                return t
            }, t
        }();
    e.NDockModelHolder = o
}