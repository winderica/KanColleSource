const function1316 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(10), r = i(173), s = i(14), a = function (t) {
        function e(e) {
            var i = t.call(this) || this, n = e.model.deck_f, o = e.model.deck_e, r = n.isCombined(), s = !1;
            if (s = null != o ? o.isCombined() : e.model.map_info.isVS12(), 0 == r) i._url = 0 == s ? "api_req_sortie/battle" : "api_req_combined_battle/ec_battle"; else {
                var a = n.type;
                1 == a || 3 == a ? i._url = 0 == s ? "api_req_combined_battle/battle" : "api_req_combined_battle/each_battle" : 2 == a && (i._url = 0 == s ? "api_req_combined_battle/battle_water" : "api_req_combined_battle/each_battle_water")
            }
            return i._data = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_formation = this._data.model.deck_f.formation, this._post_data.api_recovery_type = this._data.model.flag, 0 == this._data.model.supplied ? this._post_data.api_supply_flag = 0 : 1 == this._data.model.supplied && (this._post_data.api_supply_flag = 1), 0 == this._data.model.use_ration ? this._post_data.api_ration_flag = 0 : 1 == this._data.model.use_ration && (this._post_data.api_ration_flag = 1), 1 == r.isNeedKeyAtBattleStartAPI() && (this._post_data.api_start = Math.floor(8999 * Math.random()) + 1001), t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._data.addDayRecord(this._raw_data), this._data.isBossDamaged() ? s.ShipLoader.hasai = this._data.model.deck_e.ships_main[0].mst_id : s.ShipLoader.hasai = null, this._data = null, t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.APIBattleStart = a
}