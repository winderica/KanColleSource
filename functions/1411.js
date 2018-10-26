const function1411 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return t.prototype.getAttackTo_f = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_frai");
            return null == e || e.length <= t ? -1 : e[t]
        }, t.prototype.getDamage_f = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_fydam");
            return null == e || e.length <= t ? 0 : Math.floor(e[t])
        }, t.prototype.isShield_f = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_fydam");
            return !(null == e || e.length <= t) && e[t] % 1 != 0
        }, t.prototype.getHitType_f = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_fcl");
            return null == e || e.length <= t ? 0 : e[t]
        }, t.prototype.hasShield_f = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_fdam");
            if (null == t) return !1;
            for (var e = 0, i = t; e < i.length; e++) {
                if (i[e] % 1 != 0) return !0
            }
            return !1
        }, t.prototype.getAttackTo_e = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_erai");
            return null == e || e.length <= t ? -1 : e[t]
        }, t.prototype.getDamage_e = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_eydam");
            return null == e || e.length <= t ? 0 : e[t]
        }, t.prototype.isShield_e = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_fydam");
            return !(null == e || e.length <= t) && e[t] % 1 != 0
        }, t.prototype.getHitType_e = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_ecl");
            return null == e || e.length <= t ? 0 : e[t]
        }, t.prototype.hasShield_e = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_edam");
            if (null == t) return !1;
            for (var e = 0, i = t; e < i.length; e++) {
                if (i[e] % 1 != 0) return !0
            }
            return !1
        }, t
    }();
    e.RaigekiData = o
}