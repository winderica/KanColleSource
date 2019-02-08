const function1416 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t, e, i) {
                this._friend = t, this._o = {};
                for (var n in e) {
                    var o = e[n];
                    this._o[n] = [];
                    for (var r = 0; r < o.length; r++) this._o[n].push(o[r]);
                    for (; this._o[n].length < 6;) this._o[n].push(0)
                }
                if (null != i)
                    for (var n in i) {
                        var o = i[n];
                        if (null != o) {
                            0 == this._o.hasOwnProperty(n) && (this._o = [0, 0, 0, 0, 0, 0]);
                            for (var r = 0; r < o.length; r++) this._o[n].push(o[r]);
                            for (; this._o[n].length < 12;) this._o[n].push(0)
                        }
                    }
            }
            return Object.defineProperty(t.prototype, "friend", {
                get: function () {
                    return this._friend
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasDamage = function () {
                var t = this._friend ? "api_fdam" : "api_edam";
                return this._hasDamage(this._o, t)
            }, t.prototype._hasDamage = function (t, e) {
                var i = n.ObjUtil.getNumArray(t, e);
                if (null != i)
                    for (var o = 0, r = i; o < r.length; o++) {
                        var s = r[o];
                        if (s > 0) return !0
                    }
                return !1
            }, t.prototype.beBombed = function () {
                var t = this._friend ? "api_fbak_flag" : "api_ebak_flag",
                    e = n.ObjUtil.getNumArray(this._o, t);
                if (null == e) return !1;
                for (var i = Math.min(e.length, 6), o = 0; o < i; o++)
                    if (e[o] > 0) return !0;
                return !1
            }, t.prototype.beBombedCombined = function () {
                var t = this._friend ? "api_fbak_flag" : "api_ebak_flag",
                    e = n.ObjUtil.getNumArray(this._o, t);
                if (null == e) return !1;
                for (var i = 6; i < e.length; i++)
                    if (e[i] > 0) return !0;
                return !1
            }, t.prototype.getDamage = function (t) {
                var e = this._friend ? "api_fdam" : "api_edam",
                    i = n.ObjUtil.getNumArray(this._o, e);
                return null == i || i.length <= t ? 0 : Math.floor(i[t])
            }, t.prototype.getBak = function (t) {
                var e = this._friend ? "api_fbak_flag" : "api_ebak_flag",
                    i = n.ObjUtil.getNumArray(this._o, e);
                return !(null == i || i.length <= t) && 1 == i[t]
            }, t.prototype.getRai = function (t) {
                var e = this._friend ? "api_frai_flag" : "api_erai_flag",
                    i = n.ObjUtil.getNumArray(this._o, e);
                return !(null == i || i.length <= t) && 1 == i[t]
            }, t.prototype.getHitType = function (t) {
                var e = this._friend ? "api_fcl_flag" : "api_ecl_flag",
                    i = n.ObjUtil.getNumArray(this._o, e);
                return null == i || i.length <= t ? 0 : i[t] + 1
            }, t.prototype.isShield = function (t) {
                return this.getDamage(t) % 1 != 0
            }, t
        }();
    e.AirWarStage3Model = o
}