const function1320 = function (t, e, i) {
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
    var o = i(10),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = e.model.deck_f,
                    o = e.model.deck_e,
                    r = n.isCombined(),
                    s = !1;
                return s = null != o ? o.isCombined() : e.model.map_info.isVS12(), i._url = 1 == s ? "api_req_combined_battle/ec_midnight_battle" : 0 == r ? "api_req_battle_midnight/battle" : "api_req_combined_battle/midnight_battle", i._data = e, i
            }
            return n(e, t), e.prototype._completedEnd = function () {
                this._data.addNightRecord(this._raw_data), this._data = null, t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIBattleDayToNight = r
}