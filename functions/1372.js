const function1372 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(9),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = e.model.deck_f,
                    o = 0 != n.type,
                    r = e.model.map_info.isVS12();
                return 1 == e.model.map_info.isNightToDayStart() ? i._url = 1 == r ? "api_req_combined_battle/ec_night_to_day" : "api_req_sortie/night_to_day" : i._url = 1 == o ? "api_req_combined_battle/sp_midnight" : "api_req_battle_midnight/sp_midnight", i._data = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_formation = this._data.model.deck_f.formation, this._post_data.api_recovery_type = this._data.model.flag, 0 == this._data.model.supplied ? this._post_data.api_supply_flag = 0 : 1 == this._data.model.supplied && (this._post_data.api_supply_flag = 1), 0 == this._data.model.use_ration ? this._post_data.api_ration_flag = 0 : 1 == this._data.model.use_ration && (this._post_data.api_ration_flag = 1), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._data.addNightRecord(this._raw_data), this._data = null, t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIBattleStartNight = r
}