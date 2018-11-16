const function927 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(14), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "lost_mstid", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_mst_id", 0)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "lost_count", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_count", 0)
            }, enumerable: !0, configurable: !0
        }), t.prototype.isDentan = function () {
            return 1 == n.ObjUtil.getNumber(this._o, "api_dentan", 0)
        }, t.prototype.getUseitemMstID = function () {
            return [-1, 31, 32, 33, 34, 2, 1, 3, 4][this.lost_mstid]
        }, t
    }();
    e.HappeningModel = o
}