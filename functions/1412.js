const function1412 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = i(166), r = i(224), s = i(468), a = function () {
        function t(t, e) {
            this._info = t, this._battle = e, this._initializeShipData()
        }

        return Object.defineProperty(t.prototype, "ships", {
            get: function () {
                return this._ships
            }, enumerable: !0, configurable: !0
        }), t.prototype.getDisplayList = function () {
            for (var t = [], e = this._voice_p_no, i = this._voice_ids, n = 0; n < e.length; n++) {
                var o = e[n], r = o < this._ships.length ? this._ships[o] : null, s = i[n];
                t.push({ ship: r, voiceID: s.toString() })
            }
            return t
        }, t.prototype.getFlareIndex_f = function () {
            var t = n.ObjUtil.getNumArray(this._battle, "api_flare_pos");
            return null == t || t.length < 1 ? -1 : t[0]
        }, t.prototype.getFlareIndex_e = function () {
            var t = n.ObjUtil.getNumArray(this._battle, "api_flare_pos");
            return null == t || t.length < 2 ? -1 : t[1]
        }, t.prototype.getHougekiData = function () {
            var t = n.ObjUtil.getObject(this._battle, "api_hougeki");
            return new s.HougekiListNightData(t)
        }, t.prototype._initializeShipData = function () {
            this._ships = [];
            for (var t = n.ObjUtil.getNumArray(this._info, "api_ship_id"), e = n.ObjUtil.getNumArray(this._info, "api_ship_lv"), i = n.ObjUtil.getNumArray(this._info, "api_maxhps"), s = n.ObjUtil.getNumArray(this._info, "api_nowhps"), a = n.ObjUtil.getObjectArray(this._info, "api_Slot"), _ = n.ObjUtil.getObjectArray(this._info, "api_Param"), u = 0; u < t.length; u++) {
                var l = t[u], c = e[u], h = new o.ShipModelReplica(!0, !1, u, l, 0, c), p = s[u], d = i[u];
                h.initializeHPInfo(p, d);
                for (var f = a[u], y = [], v = [], g = 0, m = f; g < m.length; g++) {
                    m[g];
                    y.push(new r.SlotitemModelReplica(l)), v.push(1)
                }
                h.initializeSlots(y, null, v);
                var b = _[u], w = b[0], x = b[1], I = b[2], T = b[3];
                h.initializeParams(w, x, I, T), this._ships.push(h)
            }
        }, Object.defineProperty(t.prototype, "_voice_p_no", {
            get: function () {
                var t = n.ObjUtil.getNumArray(this._info, "api_voice_p_no");
                return null == t ? [] : t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "_voice_ids", {
            get: function () {
                var t = n.ObjUtil.getNumArray(this._info, "api_voice_id");
                return null == t ? [] : t
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.AllyAttackModel = a
}