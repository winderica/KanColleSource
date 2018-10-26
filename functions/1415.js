const function1415 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = i(164), r = i(222), s = i(470), a = function () {
        function t(t, e) {
            this._info = t, this._battle = e, this._initializeShipData()
        }

        return Object.defineProperty(t.prototype, "ships", {
            get: function () {
                return this._ships
            }, enumerable: !0, configurable: !0
        }), t.prototype.getDisplayList = function () {
            for (var t = [], e = this._voice_p_no, i = this._voice_ids, n = 0; n < 3; n++) {
                var o = e.indexOf(n + 1);
                if (!(o >= 0)) break;
                var r = o < this._ships.length ? this._ships[o] : null, s = i[o];
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
                var l = t[u], c = e[u], h = new o.ShipModelReplica(2, !1, u, l, 0, c), p = s[u], d = i[u];
                h.initializeHPInfo(p, d);
                for (var f = a[u], y = [], m = [], v = 0, g = f; v < g.length; v++) {
                    var b = g[v];
                    b > 0 && (y.push(new r.SlotitemModelReplica(b)), m.push(1))
                }
                h.initializeSlots(y, null, m);
                var w = _[u], x = w[0], I = w[1], T = w[2], O = w[3];
                h.initializeParams(x, I, T, O), this._ships.push(h)
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