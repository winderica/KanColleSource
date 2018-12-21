const function474 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "deck_id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_deck_id")
            }, enumerable: !0, configurable: !0
        }), t.prototype.getShipList = function () {
            for (var t = n.ObjUtil.getNumArray(this._o, "api_ship_id"), e = n.ObjUtil.getNumArray(this._o, "api_undressing_flag"), i = [], o = 0; o < t.length; o++) i.push({
                mem_id: t[o],
                damaged: 1 == e[o]
            });
            return i
        }, t.prototype.getDamage = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_damage");
            return null != e && e.length > t ? Math.floor(e[t]) : 0
        }, t.prototype.getHitType = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_cl_list");
            return null == e ? 0 : e.length <= t ? 0 : 1 == e[t] ? 2 : 1
        }, t.prototype.isShield = function (t) {
            var e = n.ObjUtil.getNumArray(this._o, "api_damage");
            return null != e && (!(e.length <= t) && e[t] % 1 != 0)
        }, t
    }();
    e.SupportData = o
}