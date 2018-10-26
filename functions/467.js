const function467 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = i(1405), r = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "deck_id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_deck_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "formation_id_f", {
            get: function () {
                var t = n.ObjUtil.getNumArray(this._o, "api_formation")[0];
                return "string" == typeof t ? parseInt(t) : t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "formation_id_e", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_formation")[1]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "formation_id_c", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_formation")[2]
            }, enumerable: !0, configurable: !0
        }), t.prototype.getHPMaxFriend = function (t) {
            return this._getNum(t, "api_f_maxhps", "api_f_maxhps_combined")
        }, t.prototype.getHPNowFriend = function (t) {
            return this._getNum(t, "api_f_nowhps", "api_f_nowhps_combined")
        }, t.prototype.getMstIDEnemy = function (t) {
            return this._getNum(t, "api_ship_ke", "api_ship_ke_combined")
        }, t.prototype.getLevelEnemy = function (t) {
            return this._getNum(t, "api_ship_lv", "api_ship_lv_combined", 1)
        }, t.prototype.getHPMaxEnemy = function (t) {
            return this._getNum(t, "api_e_maxhps", "api_e_maxhps_combined")
        }, t.prototype.getHPNowEnemy = function (t) {
            return this._getNum(t, "api_e_nowhps", "api_e_nowhps_combined")
        }, t.prototype.getSlotMstIDsEnemy = function (t) {
            return this._getNumArray(t, "api_eSlot", "api_eSlot_combined")
        }, t.prototype.getParamsFriend = function (t) {
            return this._getParams(t, "api_fParam", "api_fParam_combined")
        }, t.prototype.getParamsEnemy = function (t) {
            return this._getParams(t, "api_eParam", "api_eParam_combined")
        }, t.prototype.isBossDamaged = function () {
            return 1 == n.ObjUtil.getNumber(this._o, "api_xal01")
        }, t.prototype.getTaihiShipIndexes = function () {
            var t = [], e = n.ObjUtil.getNumArray(this._o, "api_escape_idx");
            if (null != e) for (var i = 0, o = e; i < o.length; i++) {
                var r = o[i];
                t.push(r - 1)
            }
            if (null != (e = n.ObjUtil.getNumArray(this._o, "api_escape_idx_combined"))) for (var s = 0, a = e; s < a.length; s++) {
                var r = a[s];
                t.push(r - 1 + 6)
            }
            return t
        }, t.prototype.isCombinedFriend = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_f_maxhps_combined");
            return null != t && t.length > 0 && t[0] > 0
        }, t.prototype.isCombinedEnemy = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_e_maxhps_combined");
            return null != t && t.length > 0 && t[0] > 0
        }, t.prototype.getActiveDeckFriend = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_active_deck");
            return null == t || 0 == t.length ? this.isCombinedFriend() ? 2 : 1 : t[0]
        }, t.prototype.getActiveDeckEnemy = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_active_deck");
            return null == t || 0 == t.length ? this.isCombinedEnemy() ? 2 : 1 : t[1]
        }, t.prototype.getBossModels = function () {
            var t = n.ObjUtil.getObjectArray(this._o, "api_flavor_info");
            if (null == t) return null;
            for (var e = [], i = 0, r = t; i < r.length; i++) {
                var s = r[i], a = parseInt(n.ObjUtil.getString(s, "api_type")),
                    _ = parseInt(n.ObjUtil.getString(s, "api_boss_ship_id")),
                    u = n.ObjUtil.getString(s, "api_class_name"), l = n.ObjUtil.getString(s, "api_ship_name"),
                    c = new o.BossModel(a, _, u, l), h = n.ObjUtil.getString(s, "api_voice_id"),
                    p = n.ObjUtil.getString(s, "api_message");
                c.setMessage(h, p);
                var d = parseInt(n.ObjUtil.getString(s, "api_pos_x")),
                    f = parseInt(n.ObjUtil.getString(s, "api_pos_y"));
                c.setOffset(d, f), e.push(c)
            }
            return e
        }, t.prototype._getNum = function (t, e, i, o) {
            void 0 === o && (o = 0);
            var r = n.ObjUtil.getNumArray(this._o, e);
            return null != r && r.length > t ? r[t] : t >= 6 && null != (r = n.ObjUtil.getNumArray(this._o, i)) && r.length > t - 6 ? r[t - 6] : o
        }, t.prototype._getNumArray = function (t, e, i) {
            var o = n.ObjUtil.getObjectArray(this._o, e);
            return null != o && o.length > t ? o[t] : t >= 6 && null != (o = n.ObjUtil.getObjectArray(this._o, i)) && o.length > t - 6 ? o[t - 6] : []
        }, t.prototype._getParams = function (t, e, i) {
            var n = { karyoku: 0, raisou: 0, taiku: 0, soukou: 0 }, o = this._getNumArray(t, e, i);
            return null != o && (o.length > 0 && (n.karyoku = o[0]), o.length > 1 && (n.raisou = o[1]), o.length > 2 && (n.taiku = o[2]), o.length > 3 && (n.soukou = o[3])), n
        }, t
    }();
    e.BattleCommonModel = r
}